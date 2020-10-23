<template>
  <div class="graphic graphic--time">
    <header>
      <slot name="header"></slot>
    </header>
    <figure ref="vis">
      <svg
        class="vis"
        :width="width + 'px'"
        :height="height + 'px'"
        :viewBox="`0 0 ${width} ${height}`"
      >
        <g>
          <g v-for="({ x1, x2, y, tick }) in ticksY">
            <line :x1="0" :x2="width" :y1="y" :y2="y" class="tick" />
            <text :x="0" :y="y - 2" class="tick">{{ tick }}</text>
          </g>
          <g v-for="({ y1, y2, x, tick }) in ticksX">
            <line :x1="x" :x2="x" :y1="y1" :y2="y2" class="tick" />
            <text :x="x" :y="y2 + 4" class="tick" text-anchor="middle" dominant-baseline="hanging">{{ tick }}</text>
          </g>
        </g>
        <g>
          <g v-for="({ d, x, y, ssp }) in elements">
            <path :d="d" />
          </g>
          <g v-for="({ d, x, y, isActive, ssp, value, label }) in elements">
            <path :d="d" class="shadow" v-if="isActive" />
            <path :d="d" :class="[{ isActive }, ssp]" v-if="isActive" />
            <text v-if="isActive" :x="x + 5" :y="y" dominant-baseline="middle" class="label">{{ label }}</text>
          </g>
        </g>
      </svg>
    </figure>
    <footer><slot name="footer"></slot></footer>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { scalePoint, scaleDiverging, scaleLinear } from 'd3-scale'
import { interpolatePiYG } from 'd3-scale-chromatic'
import { isUndefined, map, range, last, forEach, get, round } from 'lodash'
import { extent } from 'd3-array'
import { timer } from 'd3-timer'
import { format } from 'd3-format'
import { interpolateNumber } from 'd3-interpolate'

const f = format('.1f')

export default {
  data () {
    return {
      s: 1,
      width: 0,
      height: 0,
      margin: {
        left: 40,
        right: 100,
        top: 0,
        bottom: 30
      }
    }
  },
  computed: {
    ...mapState('time', [
      'data',
      'ssp'
    ]),
    domainX () {
      const lengths = []
      forEach(this.data, ssp => {
        lengths.push(ssp.length)
      })
      return range(Math.max(...lengths))
    },
    scaleX () {
      return scalePoint()
        .range([this.margin.left, this.width - this.margin.right])
        .domain(this.domainX)
    },
    xs () {
      return map(this.domainX, value => this.scaleX(value))
    },
    domainY() {
      const values = []
      forEach(this.data, ssp => {
        values.push(...ssp)
      })
      return [0, Math.max(...values) * 1.25]
    },
    scaleY () {
      return scaleLinear()
        .range([this.height - this.margin.bottom, this.margin.top])
        .domain(this.domainY).nice()
    },
    elements () {
      return map(this.data, (values, ssp) => {
        const coords = map(values, (value, i) => {
          let x = get(this.xs, i, 0)
          if (i === 0) {
            x = get(this.xs, 0, 0) + (get(this.xs, 1, 0) - get(this.xs, 0, 0)) / 2
          }
          return [x, this.scaleY(value)]
        })

        const [x, y] = last(coords)
        const value = round(last(values))

        const path = `M ${coords.map(c => c.join(' ')).join('L')}`

        let label = 'SSP2 Baseline'
        if (ssp === 'SSP1_SPA1_450') {
          label = 'SSP1 2°'
        } else if (ssp === 'SSP2_SPA2_450') {
          label = 'SSP2 2°'
        }

        return {
          isActive: true,
          d: path,
          x,
          y,
          ssp,
          value,
          label
        }
      })
    },
    ticksY () {
      return map(this.scaleY.ticks(5), tick => {
        const [x1, x2] = this.xs
        return {
          x1: x1 - 10,
          x2: x2 + 10,
          y: this.scaleY(tick),
          tick
        }
      })
    },
    ticksX () {
      return map([0, 5, 10], tick => {
        const [x1, x2] = this.xs
        return {
          y1: this.height - this.margin.bottom,
          y2: this.height - this.margin.bottom + 10,
          x: this.scaleX(tick),
          tick: (tick * 10) + 2000
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

  .graphic--time {
    width: 100%;
    display: grid;
    grid-template-rows: auto 400px auto;
    grid-auto-flow: row;

    & > * {
      grid-column-start: 1;
    }

    header {
      margin: 0;
    }

    figure {
      display: block;
      width: 100%;
      height: 400px;

      .vis {
        width: 100%;
        height: 100%;
      }
    }
  }

  line.tick {
    @include graphic-line-tick();
  }

  text.tick {
    @include graphic-text-tick();
  }

  text.label {
    @include graphic-text-label();
  }

  path {
    stroke: getColor(gray, 50);
    fill: none;

    &.isActive {
      stroke-width: 2px;

      &.SSP1_SPA1_450 {
        stroke: $color-green;
      }

      &.SSP2_SPA2_450 {
        stroke: $color-blue;
      }

      &.SSP2 {
        stroke: getColor(blue, 40);
        stroke-width: 1px;
        stroke-dasharray: 3, 2;
      }

      &.SSP5 {
        stroke: $color-violet;
      }
    }

    &.shadow {
      stroke-width: 4px;
      stroke: #fff;
    }
  }

  footer {
    @include text-note();
  }

</style>
