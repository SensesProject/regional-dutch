<template>
  <div ref="vis" class="vis-driver-container" @mouseenter="() => hoverDriver(index)" @mouseleave="() => hoverDriver(null)">
    <svg
      class="vis"
      :width="width + 'px'"
      :height="height + 'px'"
      :viewBox="`0 0 ${width} ${height}`"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <polygon :points="area" ref="area" stroke-linejoin="round" class="visible" />
      <polyline :points="path" ref="path" stroke-linejoin="round" class="visible" />
      <polyline :points="pathHover" stroke-linejoin="round" class="hover" v-if="hover !== null && hover !== index" />
      <line class="tick base" x1="0" :x2="width" :y1="scaleY(0)" :y2="scaleY(0)" />
    </svg>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import { scaleLinear, scaleDiverging } from 'd3-scale'
import { interpolatePiYG } from 'd3-scale-chromatic'
import anime from 'animejs/lib/anime.es.js';
import { isUndefined, map, range, flatten, values as getValues, forEach, every, last } from 'lodash'

const STEPS = 10

const lines = [
  'change to new business models',
  'current agricultural practices',
  'growing of local economy',
  'environmental focussed policy',
  'climate smart land use',
  'demography population decline',
  'public opinion (as in SSP1)',
  'regional income from recreation',
  'energy transition',
  'spatial room for nature',
  'landscape value importance',
  'extreme climate events',
  'biodiversity increase',
  'technology investment'
]

export default {
  props: ['index'],
  data () {
    return {
      width: 0,
      height: 0,
      margin: {
        left: 10,
        right: 10,
        top: 3,
        bottom: 3
      }
    }
  },
  computed: {
    ...mapState('driver', [
      'hover'
    ]),
    ...mapGetters('driver', [
      'values'
    ]),
    scaleX () {
      return scaleLinear()
        .range([this.margin.left, this.width - this.margin.right])
        .domain([0, STEPS - 1])
    },
    scaleY () {
      return scaleLinear()
        .range([this.height - this.margin.bottom, this.margin.top])
        .domain([-0.8, .8]).nice()
    },
    ticks () {
      return map(this.scaleY.ticks(1), tick => {
        const [x1, x2] = this.scaleX.range()
        return {
          x1,
          x2,
          y: this.scaleY(tick),
          label: tick,
          classes: { base: tick === 0 }
        }
      })
    },
    xs () {
      return map(range(STEPS), i => this.scaleX(i))
    },
    path () {
      const y = this.scaleY(0)
      const line = lines[this.index]
      const coords = map(this.xs, (x) => {
        return `${x} ${y}`
      })
      return coords.join(',')
    },
    area () {
      const x = this.xs[this.xs.length - 1]
      const y = this.scaleY(0)
      return `${this.path}, ${x} ${y}`
    },
    pathHover () {
      const y = this.scaleY(0)
      const line = this.values[this.hover]
      const coords = map(this.xs, (x, i) => {
        return `${x} ${this.scaleY(line[i])}`
      })
      return coords.join(',')
    }
  },
  mounted () {
    this.calcSizes()
    window.addEventListener('resize', this.calcSizes, false)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.calcSizes, false)
  },
  methods: {
    ...mapActions('driver', [
      'hoverDriver'
    ]),
    calcSizes () {
      const { vis: el } = this.$refs
      if (!isUndefined(el)) {
        const width = el.clientWidth || el.parentNode.clientWidth
        const height = el.clientHeight || el.parentNode.clientHeight
        this.width = width
        this.height = height
        this.anime(this.values)
      }
    },
    anime (endValue) {
      const path = map(endValue[this.index], (y, x) => {
        return `${this.xs[x]} ${this.scaleY(y)}`
      }).join(',')

      const x = this.xs[this.xs.length - 1]
      const y = this.scaleY(0)
      const area = `${path}, ${x} ${y}`

      const scaleAnomalyPuOr = scaleDiverging()
        .domain([-0.8, 0, 0.8])
        .interpolator(interpolatePiYG)

      const scaleAnomalyPuOr2 = scaleDiverging()
        .domain([-2, 0, 2])
        .interpolator(interpolatePiYG)

      const isPositive = last(endValue[this.index]) > 0
      const color = scaleAnomalyPuOr(last(endValue[this.index]))
      const fill = scaleAnomalyPuOr2(last(endValue[this.index]))

      // console.log(endValue[this.index])

      anime({
        targets: this.$refs.path,
        points: path,
        stroke: scaleAnomalyPuOr(isPositive ? 1 : -1), // isPositive ? '#c8005f' : '#ffac00',
        easing: 'easeOutQuad',
        duration: 1000,
      });

      anime({
        targets: this.$refs.area,
        points: area,
        fill: fill, // isPositive ? '#ed96ab' : '#ffd89a',
        easing: 'easeOutQuad',
        duration: 1000,
      });
    }
  },
  watch: {
    values (newPos) {
      this.anime(newPos)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .values {
    font-size: 0.8rem;
  }

  .vis-driver-container, .vis-driver-container > svg {
    width: 100%;
    height: 60px;
  }

  polygon {
    // transition: fill 0.3s;
  }

  polyline {
    stroke: #000;
    fill: none;
    // stroke-dasharray: 3, 1;
    stroke-width: 1.2;
    // stroke: rgb(46, 60, 133);
    transition: opacity 0.3s;
    opacity: 0;

    &.visible {
      opacity: 1;
    }

    // &.full {
    //   opacity: 0;
    // }

    &.hover {
      opacity: 1;
      stroke-width: 1;
      stroke-dasharray: 3, 2;
      stroke: getColor(gray, 20);
    }
  }

  line {
    stroke-width: 0.35;
    stroke: getColor(gray, 90);
    stroke-dasharray: 3, 2;

    &.base {
      stroke-width: 1;
      stroke: getColor(gray, 70);
    }
  }

  text {
    &.tick {
      fill: $color-black;
      font-size: 0.6rem;
    }

    &.direction {
      fill: $color-black;
      font-size: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
  }

</style>
