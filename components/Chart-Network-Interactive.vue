<template>
  <div ref="vis" class="vis-container">
    <svg
      class="vis"
      :width="width + 'px'"
      :height="height + 'px'"
      :viewBox="`0 0 ${width} ${height}`"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <line v-for="{ x1, x2, y1, y2 } in links" :x1="x1" :x2="x2" :y1="y1" :y2="y2" />
      <g v-for="{ x, y, i } in nodes">
        <circle
          :cx="x"
          :cy="y"
          r="20" />
        <text
          :x="x"
          :y="y"
          text-anchor="middle">
          {{ i }}
        </text>
      </g>
    </svg>
    <div class="vis-interactive">
      <div
        v-for="{ label, x, y, i, isActive, isDriver } in nodes"
        :style="{ transform: `translate(${x}px, ${y}px)` }"
        class="driver">
        <div class="wrapper" :class="{ isActive }">
          <label
            v-if="isDriver"
            @click="() => toggleDriver(i)"
            :for="i">
            <input type="checkbox" :checked="Boolean(isActive)" />
            <h5 :name="i">{{ label }}</h5>
          </label>
          <h5 v-else>{{ label }}</h5>
          <ChartDriver v-if="!isDriver" :index="i" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { scalePoint } from 'd3-scale'
import { isUndefined, map, range } from 'lodash'
import ChartDriver from '~/components/Chart-Driver2'

export default {
  components: {
    ChartDriver
  },
  data () {
    return {
      width: 0,
      height: 0,
      margin: {
        left: 75,
        right: 75,
        top: 20,
        bottom: 20
      }
    }
  },
  computed: {
    ...mapState('driver', [
      'drivers'
    ]),
    scaleX () {
      return scalePoint()
        .range([this.margin.left, this.width - this.margin.right])
        .domain(range(5))
    },
    scaleY () {
      return scalePoint()
        .range([this.height - this.margin.bottom, this.margin.top])
        .domain(range(4))
    },
    nodes () {
      const drivers = [
        ['Business models', 0, 1, true],
        ['Agricultural practices', 1, 1, false],
        ['Local economy', 1, 2, false],
        ['Environmental policy', 2, 1, false],
        ['Smart land use', 3, 0, false],
        ['Demography population', 1, 3, true],
        ['Public opinion', 2, 2, false],
        ['Income from recreation', 3, 3, false],
        ['Energy transition', 2, 0, false],
        ['Room for nature', 4, 0, false],
        ['Landscape value', 3, 2, false],
        ['Climate events', 3, 1, true],
        ['Biodiversity', 4, 1, false],
        ['Technology investment', 1, 0, true],
      ]
      return map(drivers, ([label, x, y, isDriver], i) => {
        return {
          label,
          isActive: this.drivers[i],
          isDriver,
          i,
          x: this.scaleX(x),
          y: this.scaleY(y)
        }
      })
    },
    links () {
      const links = [
        [1, 2],
        [1, 3],
        [2, 3],
        [6, 3],
        [6, 7],
        [3, 7],
        [8, 3],
        [5, 2],
        [4, 2],
        [14, 2],
        [4, 9],
        [9, 5],
        [5, 10],
        [10, 11],
        [11, 9],
        [10, 13],
        [11, 8],
        [7, 11],
        [12, 5],
        [12, 7],
        [14, 9],
        [7, 4]
      ]
      // console.log({ links }, this.nodes)
      return map(links, ([s, t]) => {
        // console.log(this.nodes[s - 1])
        const { x: x1, y: y1 } = this.nodes[s - 1]
        const { x: x2, y: y2 } = this.nodes[t - 1]
        // console.log(x1, x2, y1, y2)
        return {
          x1,
          x2,
          y1,
          y2
        }
      })
    }
  },
  mounted () {
    this.calcSizes()
    window.addEventListener('resize', this.calcSizes, false)
  },
  updated () {
    this.calcSizes()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.calcSizes, false)
  },
  methods: {
    ...mapActions('driver', [
      'hoverDriver',
      'toggleDriver'
    ]),
    calcSizes () {
      const { vis: el } = this.$refs
      if (!isUndefined(el)) {
        const width = el.clientWidth || el.parentNode.clientWidth
        const height = el.clientHeight || el.parentNode.clientHeight
        this.width = width
        this.height = height
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .values {
    font-size: 0.8rem;
  }

  .vis-container {
    position: relative;
  }

  .vis-container, svg {
    width: 100%;
    height: 500px;
  }

  .vis-interactive {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    .driver {
      display: inline-block;
      position: absolute;

      .wrapper {
        background-color: #ffffff;
        border: 1px solid #e4e4e4;
        border-radius: 3px;
        width: 150px;
        height: 100px;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.5rem;
        transition: border-color 0.3s;

        &.isActive {
          border-color: $color-neon;
        }

        label, h5 {
          display: inline-block;
          line-height: 1.1;
          font-weight: $font-weight-bold;
        }

        label {
          display: flex;
          color: $color-neon;
        }
      }
    }
  }

  circle {
    fill: $color-yellow;
  }

  line {
    stroke: getColor(gray, 70);
  }

</style>
