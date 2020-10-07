<template>
  <g :transform="'translate(' + center + ',' + center + ')'">
    <g v-for="(area, n) in areas" :class="{ 'areas': true }">
      <circle cx="0" cy="0"
        :class="{ ['area-' + (n + 1)]: true }"
        :r="radius * area.r" />
      <defs>
        <path
          :id="'textPath' + n"
          :d="area.path" />
      </defs>
      <text class="areaLabels" :style="{ opacity: 1 }">
        <textPath :xlink:href="'#textPath' + n" alignment-baseline="hanging" text-anchor="middle" startOffset="50%">
          {{ area.label }}
        </textPath>
      </text>
    </g>
  </g>
</template>

<script>
  import { mapState } from 'vuex'
  import _ from 'lodash'

  export default {
    props: {
      radius: {
        type: Number
      },
      center: {
        type: Number
      }
    },
    data: function () {
      return {
        data: [{
          'r': 1,
          'label': 'Netherlands'
        }, {
          'r': 0.6666,
          'label': 'Overijssel'
        }, {
          'r': 0.3333,
          'label': 'Vecht'
        }]
      }
    },
    computed: {
      areas: function () {
        return _.map(this.data, area => {
          const { radius } = this
          const radi = radius * area.r - 30
          const start = { x: -radi, y: 0 }
          const end = { x: radi, y: 0 }
          const path = [
            `M ${start.x} ${start.y}`,
            `A ${radi} ${radi} 1 0 1 ${end.x} ${end.y}`
          ].join(' ')

          return {
            ...area,
            path: path
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/style/global";

  .areas {
    transition-duration: 0.5s;
    transition-delay: 0s;
    stroke-opacity: 0.3;
  }

  .area-4 {
    fill-opacity: 0.3;
    stroke: #d8d8d8;
    stroke-width: 1px;
    fill: #f5f5f5;
  }
  .area-3 {
    fill-opacity: 0.9;
    stroke: #d8d8d8;
    stroke-width: 1px;
    fill: #f5f5f5;
  }
  .area-2 {
    fill-opacity: 0.4;
    stroke: #d8d8d8;
    stroke-width: 1px;
    fill: #f5f5f5;
  }
  .area-1 {
    fill-opacity: 0.2;
    stroke: #d8d8d8;
    stroke-width: 1px;
    fill: #f5f5f5;
  }

  path {
    fill: none;
  }

  .areaLabels {
    fill: #d8d8d8;
    pointer-events: none;
    font-size: 26px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 4px;
  }

</style>
