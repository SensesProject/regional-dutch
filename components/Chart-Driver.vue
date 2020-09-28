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
      <path v-for="path in paths" :d="path" />
    </svg>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { scaleLinear } from 'd3-scale'
import { isUndefined, map } from 'lodash'

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
      }
    }
  },
  computed: {
    ...mapGetters('driver', [
      'values'
    ]),
    scaleX () {
      return scaleLinear()
        .range([this.margin.left, this.width - this.margin.right])
        .domain([0, 9])
    },
    scaleY () {
      return scaleLinear()
        .range([this.height - this.margin.bottom, this.margin.top])
        .domain([-1, 1]).nice()
    },
    paths () {
      return map(this.values, (line) => {
        const coords = map(line, (y, x) => {
          return [this.scaleX(x), this.scaleY(y)]
        })
        return `M ${coords.join('L')}`
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
    height: 500px;
  }

  path {
    stroke: #000;
    fill: none;
    transition: d 0.3s;
  }

</style>
