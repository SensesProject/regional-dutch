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
      <ChartVisionBackground :center="(width) / 2" :radius="(this.height - this.margin.top) / 2" />
      <!-- <circle :cx="width / 2" :cy="height / 2" :r="((width - margin.top) / 3 * 3) / 2" class="vecht" />
      <circle :cx="width / 2" :cy="height / 2" :r="((width - margin.top) / 3 * 2) / 2" class="vverijssel" />
      <circle :cx="width / 2" :cy="height / 2" :r="((width - margin.top) / 3 * 1) / 2" class="netherlands" /> -->

      <text :x="width / 2" :y="10" text-anchor="middle" class="sector">land use and agriculture</text>
      <text :x="width / 2" :y="height" text-anchor="middle" class="sector">nature</text>
      <text :x="10" :y="height / 2" transform="rotate(-90)" :style="{ 'transform-origin': `${10}px ${height / 2}px` }" text-anchor="middle" class="sector">socioeconomic development</text>
      <text :x="width - 10" :y="height / 2" transform="rotate(90)" :style="{ 'transform-origin': `${width - 10}px ${height / 2}px` }" text-anchor="middle" class="sector">energy</text>

      <g v-for="{ x, y, label, rotate, anchor } in points">
        <Point :x="x" :y="y" :label="label" />
        <!-- <circle :cx="x" :cy="y" :r="3" class="vision" v-tooltip="{ content: label }" />
        <text :x="x" :y="y" :text-anchor="anchor" :style="{ 'transform': `rotate(${rotate}deg)`}" :transform-origin="`${x} ${y}`">{{ label }}</text> -->
      </g>
    </svg>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { scaleLinear } from 'd3-scale'
import { isUndefined, map } from 'lodash'
import ChartVisionBackground from '~/components/Chart-Vision-Background'
import Point from '~/components/Helper/Point'

function getCoordinatesForPercent (percent) {
  const x = Math.cos(2 * Math.PI * percent)
  const y = Math.sin(2 * Math.PI * percent)
  return [x, y]
}

const scalePercent = scaleLinear()
  .range([0, 0.25])
  .domain([0, 100])

export default {
  components: {
    ChartVisionBackground,
    Point
  },
  data () {
    return {
      width: 0,
      height: 0,
      margin: {
        left: 20,
        right: 20,
        top: 60,
        bottom: 20
      }
    }
  },
  computed: {
    ...mapState('vision', [
      'visions'
    ]),
    scaleScope () {
      return scaleLinear()
        .range([0, (this.height - this.margin.top) / 2])
        .domain([0, 100])
    },
    scaleX () {
      return scaleLinear()
        .range([this.margin.left, this.width - this.margin.right])
        .domain([0, 9])
    },
    points () {
      return map(this.visions, ([label, scope, socio, land, energy, nature]) => {
        const r = this.scaleScope(scope)

        let percent = 0
        let x = 0
        let y = 0
        let rotate = 0
        let anchor = 'start'

        if (land && energy || land === 100) {
          percent = scalePercent(land) - 0.5
          const [_x, _y] = getCoordinatesForPercent(percent)
          x = (this.width / 2) + _x * r
          y = (this.height / 2) + _y * r
          rotate = -45
          // console.log({ label, land, energy, x, y, _x, _y, scope, r }, land, scalePercent(land), r)
        } else if (energy && nature || energy) {
          percent = scalePercent(energy) - 0.25
          const [_x, _y] = getCoordinatesForPercent(percent)
          x = (this.width / 2) + _x * r
          y = (this.height / 2) - _y * r
          rotate = 45
        } else if (nature && socio || nature) {
          percent = scalePercent(nature)
          const [_x, _y] = getCoordinatesForPercent(percent)
          x = (this.width / 2) - _x * r
          y = (this.height / 2) + _y * r
          rotate = -45
          anchor = 'end'
        } else if (socio && land || socio) {
          percent = scalePercent(socio) + 0.25
          const [_x, _y] = getCoordinatesForPercent(percent)
          x = (this.width / 2) + _x * r
          y = (this.height / 2) - _y * r
          rotate = 45
          anchor = 'end'
        }

        const t = 5

        let location
        if (scope < 33 - t) {
          location = 'It is situated in the Vecht.'
        } else if (scope >= 33 - t && scope < 33 + t) {
          location = 'It is situated between the Vecht and the Overijssel.'
        } else if (scope >= 33 + t && scope < 66 - t) {
          location = 'It is situated in the Overijssel.'
        } else if (scope >= 66 + t && scope < 66 + t) {
          location = 'It is situated between the Overijssel and the Netherlands.'
        } else {
          location = 'It is situated in the Netherlands.'
        }

        let field
        if (land === 100) {
          field = 'It is a »land use and agriculture« vision.'
        } else if (energy === 100) {
          field = 'It is a »energy« vision.'
        } else if (energy === 100) {
          field = 'It is a »energy« vision.'
        } else if (nature === 100) {
          field = 'It is a »nature« vision.'
        } else if (socio === 100) {
          field = 'It is a »socioeconomic development« vision.'
        } else if (land && energy && nature && socio) {
          field = 'It is a »land use and agriculture«, »energy«, »nature« and »socioeconomic development« vision.'
        } else if (land && energy) {
          field = 'It is a »land use and agriculture« and »energy« vision.'
        } else if (energy && nature) {
          field = 'It is a »energy« and »nature« vision.'
        } else if (nature && socio) {
          field = 'It is a »nature« and »socioeconomic development« vision.'
        } else if (socio && land) {
          field = 'It is a »socioeconomic development« and »land use and agriculture« vision.'
        }

        const tooltip = `<h5>${label}</h5><p>Lorem ipsum dolor</p><small>${field} ${location}</small>`

        return {
          x,
          y,
          label: tooltip,
          rotate,
          anchor
        }
        // const coords = map(line, (y, x) => {
        //   return [this.scaleX(x), this.scaleY(y)]
        // })
        // return `M ${coords.join('L')}`
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
    calcSizes () {
      const { vis: el } = this.$refs
      if (!isUndefined(el)) {
        const width = el.clientWidth || el.parentNode.clientWidth
        // const height = el.clientHeight || el.parentNode.clientHeight
        this.width = width
        this.height = width
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

  .vis-container, svg {
    width: 100%;
  }

  path {
    stroke: #000;
    fill: none;
    transition: d 0.3s;
  }

  circle {
    opacity: 0.2;
    fill: $color-yellow;
  }

  circle {
    &.vision {
      opacity: 1;
      fill: black;
    }
  }

  .sector {
    text-transform: uppercase;
    letter-spacing: 0.02em;
    font-size: 0.8rem;
    fill: #333333;
  }

</style>
