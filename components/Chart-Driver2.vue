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
      <polyline v-for="path in paths" :points="path" ref="path" />
    </svg>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { scaleLinear } from 'd3-scale'
import anime from 'animejs/lib/anime.es.js';
import { isUndefined, map, range, flatten, values as getValues, forEach } from 'lodash'

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
  data () {
    return {
      width: 0,
      height: 0,
      margin: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20
      },
      tweened: []
    }
  },
  computed: {
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
        .domain([-1, 1]).nice()
    },
    xs () {
      return map(range(STEPS), i => this.scaleX(i))
    },
    paths () {
      const y = this.scaleY(0)
      return map(lines, (line) => {
        const coords = map(this.xs, (x) => {
          return `${x} ${y}`
        })
        return coords.join(',')
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
        const height = el.clientHeight || el.parentNode.clientHeight
        this.width = width
        this.height = height
        this.anime(this.values)
      }
    },
    anime (endValue) {
      forEach(this.$refs.path, (path, i) => {
        const coords = map(endValue[i], (y, x) => {
          return `${this.xs[x]} ${this.scaleY(y)}`
        }).join(',')

        anime({
          targets: path,
          points: coords,
          easing: 'easeOutQuad',
          duration: 1000,
        });
      })
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

  .vis-container, svg {
    width: 100%;
    height: 500px;
  }

  polyline {
    stroke: #000;
    fill: none;
  }

</style>
