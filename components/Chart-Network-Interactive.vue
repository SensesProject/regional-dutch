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
      <defs>
        <marker  v-for="({ color, arrow }, i) in links" :id="`arrow-${i}`" markerWidth="8" markerHeight="8" refX="4" refY="4" markerUnits="userSpaceOnUse" :orient="arrow">
          <path class="marker" d="M0, 1 L4, 5 L8, 1" :style="{ stroke: color, 'stroke-width': '1.5' }" />
        </marker>
      </defs>
      <g v-for="({ d, color, arrow, points }, i) in links">
        <path :d="d" :style="{ stroke: '#fff', 'stroke-width': '5px' }" />
        <path :d="d" :style="{ stroke: color }" :marker-end="`url(#arrow-${i})`" />
        <circle v-for="([x, y]) in points" :cx="x" :cy="y" r="3" class="point" />
        <!-- <path :d="d" :style="{ stroke: color }" marker-end="url(#arrow-270)" /> -->
      </g>
      <text class="label" dominant-baseline="middle" :x="labelDriver.x - 100" :y="labelDriver.y" text-anchor="end">{{ labelDriver.label }}</text>
      <line :x1="labelDriver.x" :x2="labelDriver.x - 95" :y1="labelDriver.y" :y2="labelDriver.y" class="label" />

      <text class="label" dominant-baseline="middle" :y="labelConcept.y" text-anchor="end">
        <tspan dy="-8" :x="labelConcept.x - 98">{{ labelConcept.label[0] }}</tspan>
        <tspan dy="16" :x="labelConcept.x - 100">{{ labelConcept.label[1] }}</tspan>
      </text>
      <line :x1="labelConcept.x" :x2="labelConcept.x - 95" :y1="labelConcept.y" :y2="labelConcept.y" class="label" />
    </svg>
    <div class="vis-interactive" v-if="true">
      <div
        v-for="{ label, x, y, i, isActive, isDriver } in nodes"
        :style="{ transform: `translate(${x}px, ${y}px)` }"
        class="driver">
        <div class="wrapper" :class="{ isActive, isDriver }" v-if="isDriver" @click="() => toggleDriver(i)">
          <svg class="switch">
            <rect x="1" y="1" :class="{ isActive }" width="26" height="14" rx="7" ry="7" />
            <circle cy="8" cx="8" :class="{ isActive }" r="5" />
          </svg>
          <h5>{{ label }}</h5>
        </div>
        <div v-else class="wrapper">
          <h5 >{{ label }}</h5>
          <ChartDriver :index="i" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { scalePoint, scaleDiverging } from 'd3-scale'
import { interpolatePiYG } from 'd3-scale-chromatic'
import { isUndefined, map, range, last } from 'lodash'
import ChartDriver from '~/components/Chart-Driver2'

const v = 60
const h = 80
const c = 20

function getDy (ttb, y1, y2) {
  return (y2 - y1 + c * (ttb ? -2 : 2)) / 2
}

function getDx (ltr, x1, x2) {
  return (x2 - x1 + c * (ltr ? -2 : 2)) / 2
}

function generateCurve (x1, x2, y1, y2, cx1, cx2, cy1, cy2, d1, d2) {
  const ltr = Boolean(cx2 - cx1 > 0)
  const ttb = Boolean(cy1 - cy2 > 0)
  const cx = ltr ? c / 2 : c / -2
  const cy = ttb ? c / 2 : c / -2

  if (x1 !== x2 && y1 !== y2) {
    // console.log({ cy1, cy2 }, Math.abs(cy1 - cy2))
    if (Math.abs(cy1 - cy2) > 1) { // vertical
      // Offset anchor points
      y1 = y1 + (ttb ? 20 : -20)
      y2 = y2 + (ttb ? -20 : 20)

      const dy = getDy(ttb, y1, y2)
      const dx = getDx(ltr, x1, x2)

      const points = [
        // [x1, y1],
        // [x1 + dx, y1],
        // [x1 + dx + cx * 1.5, y1],
        // [x1 + dx + cx * 2, y1 + cy * 0.5],
        // [x1 + dx + cx * 2, y1 + cy * 2],
        // [x2 - dx - cx * 2, y2 - cy * 2],
        // [x2 - dx - cx * 2, y2 - cy * 0.5],
        // [x2 - dx - cx * 1.5, y2],
        // [x2 - dx, y2],
        // [x2, y2],
      ]

      const d = `
        M ${x1} ${y1}
        L ${x1 + dx} ${y1}
        C
        ${x1 + dx + cx * 1.5} ${y1},
        ${x1 + dx + cx * 2} ${y1 + cy * 0.5},
        ${x1 + dx + cx * 2} ${y1 + cy * 2}
        L ${x2 - dx - cx * 2} ${y2 - cy * 2}
        C
        ${x2 - dx - cx * 2} ${y2 - cy * 0.5}
        ${x2 - dx - cx * 1.5} ${y2}
        ${x2 - dx} ${y2}
        L
        ${x2 + 80 * (ltr ? -1 : 1)} ${y2}`
      return {
        d,
        color: 'red',
        arrow: ltr ? '270' : '90',
        points
      }
    } else {
      // Offset anchor points
      x1 = x1 + (ltr ? 25 : -25)
      x2 = x2 + (ltr ? -25 : 25)

      const dy = getDy(ttb, y1, y2)

      const points = [
        // [x1, y1],
        // [x1, y1 + dy],
        // [x1, y1 + dy + cy * 1.5],
        // [x1 + cx * 0.5, y1 + dy + cy * 2],
        // [x1 + cx * 2, y1 + dy + cy * 2],
        // [x2 - cx * 2, y2 - dy - cy * 2],
        // [x2 - cx * 0.5, y2 - dy - cy * 2],
        // [x2, y2 - dy - cy * 1.5],
        // [x2, y2 - dy],
        // [x2, y2],
      ]

      const d = `
        M ${x1} ${y1}
        L ${x1} ${y1 + dy}
        C
        ${x1} ${y1 + dy + cy * 1.5},
        ${x1 + cx * 0.5} ${y1 + dy + cy * 2},
        ${x1 + cx * 2} ${y1 + dy + cy * 2}
        L ${x2 - cx * 2} ${y2 - dy - cy * 2}
        C
        ${x2 - cx} ${y2 - dy - cy * 2}
        ${x2} ${y2 - dy - cy * 1.5}
        ${x2} ${y2 - dy}
        L
        ${x2} ${y2 + 60 * (ttb ? -1 : 1)}`
      return {
        d,
        color: 'green',
        arrow: ttb ? '0' : '180',
        points
      }
    }
  } else {
    if (cx1 === cx2) {
      return {
        d: `M ${x1} ${y1} L ${x2} ${y2 + (ttb ? -v : v)}`,
        color: 'green',
        arrow: ttb ? '0' : '180',
        points: []
      }
    } else {
      return {
        d: `M ${x1} ${y1} L ${x2 + (ltr ? -h : h)} ${y2}`,
        color: 'green',
        arrow: ltr ? '270' : '90',
        points: []
      }
    }
  }

}

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
        top: 60,
        bottom: 60
      }
    }
  },
  computed: {
    ...mapState('driver', [
      'drivers'
    ]),
    ...mapGetters('driver', [
      'values'
    ]),
    combination () {
      return [this.values[0], this.values[5], this.values[11], this.values[13]]
    },
    scaleX () {
      return scalePoint()
        .range([this.margin.left, this.width - this.margin.right])
        .domain(range(5))
    },
    dX () {
      return Math.round(Math.abs(this.scaleX(1) - this.scaleX(0)))
    },
    scaleY () {
      return scalePoint()
        .range([this.height - this.margin.bottom, this.margin.top])
        .domain(range(4))
    },
    dY () {
      return Math.round(Math.abs(this.scaleY(1) - this.scaleY(0)))
    },
    labelDriver () {
      return {
        x: this.scaleX(1),
        y: this.scaleY(3),
        label: `${this.drivers[5] ? 'activated' : 'deactivated'} driver`
      }
    },
    labelConcept () {
      const value = last(this.values[2])
      let word
      if (value < -0.3) {
        word = 'very negatively'
      } else if (value < 0) {
        word = 'negatively'
      } else if (value > 0.3) {
        word = 'very positively'
      } else {
        word = 'positively'
      }
      return {
        x: this.scaleX(1),
        y: this.scaleY(2),
        label: [word, 'developing concept']
      }
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
          x: Math.round(this.scaleX(x)),
          y: Math.round(this.scaleY(y)),
          cx: x,
          cy: y
        }
      })
    },
    links () {
      const links = [
        [1, 2, -0.6],
        [1, 3, 0.5],
        [2, 3, 0.3],
        [6, 3, -0.5],
        [6, 7, 0.2],
        [3, 7, 0.2],
        [8, 3, 0.5],
        [5, 2, -0.5],
        [4, 2, -0.5],
        [14, 2, 0.5],
        [4, 9, 0.5],
        [9, 5, 0.8],
        [5, 10, 0.5],
        [10, 11, 0.5],
        [11, 9, -0.9],
        [10, 13, 0.5],
        [11, 8, 0.5],
        [7, 11, 0.5],
        [12, 5, 0.2],
        [12, 7, 0.2],
        [14, 9, 0.5],
        [7, 4, 0.5]
      ]

      const scaleAnomalyPuOr = scaleDiverging()
        .domain([-1, 0, 1])
        .interpolator(interpolatePiYG)
      // console.log({ links }, this.nodes)
      return map(links, ([s, t, w], i) => {
        // console.log(this.nodes[s - 1])
        const { x: x1, y: y1, cx: cx1, cy: cy1, isDriver: d1 } = this.nodes[s - 1]
        const { x: x2, y: y2, cx: cx2, cy: cy2, isDriver: d2 } = this.nodes[t - 1]

        const ltr = cx2 - cx1
        const ttb = cy1 - cy2

        // console.log({cx1, cx1, ltr}, Boolean(ltr))

        let color = false
        let points = []
        let arrow = '90'
        let d = `M ${x1} ${y1}L${x2} ${y2}`

        if (x1 !== x2 && y1 !== y2) {
          let _x1 = x1
          let _x2 = x2
          let _y1 = y1
          let _y2 = y2

          if (_x2 < _x1) {
            _x1 = x2
            _x2 = x1
            _y1 = y2
            _y2 = y1
          }

          // const [_x2, _x1] = [x1, x2].sort()
          // const [_y2, _y1] = [y1, y2].sort()

          if (_y1 > _y2) {
            if (_y1 - _y2 > this.dY + 2) {
              ({ d, color, arrow, points } = generateCurve(x1, x2, y1, y2, cx1, cx2, cy1, cy2, d1, d2))
            } else {
              ({ d, color, arrow, points } = generateCurve(x1, x2, y1, y2, cx1, cx2, cy1, cy2, d1, d2))
            }
          } else {
            if (_y2 - _y1 > this.dY + 2) {
              ({ d, color, arrow, points } = generateCurve(x1, x2, y1, y2, cx1, cx2, cy1, cy2, d1, d2))
            }
            else {
              ({ d, color, arrow, points } = generateCurve(x1, x2, y1, y2, cx1, cx2, cy1, cy2, d1, d2))
            }
          }
          // color = 'blue' // scaleAnomalyPuOr(w)

        } else {
          ({ d, color, arrow, points } = generateCurve(x1, x2, y1, y2, cx1, cx2, cy1, cy2, d1, d2))
        }

        // color = ltr > 0 ? 'red' : 'blue'
        color = scaleAnomalyPuOr(w)

        return {
          color,
          d,
          arrow,
          points
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
    height: 600px;
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
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
        border-radius: 6px;
        width: 150px;
        height: 110px;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.7rem;
        transition: border-color 0.3s;

        // h5 {
        //   margin-left: 2px;
        //   margin-top: 2px;
        // }

        &.isDriver {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          height: 80px;
          width: 140px;
          border-radius: 20px;

          &:hover {
            border-color: getColor(gray, 70);
          }

          h5 {
            text-align: center;
            color: $color-dark-gray;
            margin: 0;
            // transition: color 1s;
          }

          // &.isActive {
          //   color: $color-black;
          // }
        }

        &.isActive {
          // border-color: $color-neon;
          h5 {
            // color: $color-black;
            color: $color-black;
            // animation-name: flash;
            // animation-duration: 600ms;
            // animation-iteration-count: 1;
            // animation-timing-function: ease-in-out;
          }
        }

        label, h5 {
          display: inline-block;
          line-height: 1.1;
          font-weight: $font-weight-bold;
          font-size: 0.85rem;
        }
      }
    }
  }

  text.label {
    fill: $color-dark-gray;
    font-style: italic;
  }

  line.label {
    stroke: $color-light-gray;
  }

  circle {
    fill: $color-yellow;
    // stroke: black;
  }

  path {
    fill: none;
    stroke-width: 1.5px;
    // opacity: 0.3;
  }

  @-webkit-keyframes flash {
    0% {
      color: $color-neon;
    }
    100% {
      color: $color-black;
    }
  }

  .switch {
    width: 28px;
    height: 16px;
    margin-bottom: 0.5rem;

    rect {
      // stroke-width: 10px;
      transition: fill 0.3s, stroke 0.3s;
      fill: $color-pale-gray;
      stroke: $color-pale-gray;

      &.isActive {
        fill: $color-neon;
        stroke: getColor(neon, 45);
      }
    }

    circle {
      transition: transform 0.3s;
      transform: translate(0);
      fill: $color-white;

      &.isActive {
        transform: translate(12px);
      }
    }
  }

</style>
