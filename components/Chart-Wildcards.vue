<template>
  <figure class="graphic layout--right graphic--wildcards" :style="styling">
    <div ref="vis" class="vis-container">
      <svg
        class="vis"
        :width="width + 'px'"
        :height="height + 'px'"
        :viewBox="`0 0 ${width} ${height}`"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <Box :x="width / 3 * 1" :y="height / 3 * 1" :w="width / 3.6" :h="height / 4" :isActive="step === 5" classes="ssp" :text="['SSP 5', step >= 5 ? '😱' : '“Fossil Fuel”']" :wasActive="step >= 5" link="ssp5-wildcard" />
        <Box :x="width / 3 * 1" :y="height / 3 * 2" :w="width / 3.6" :h="height / 4" :isActive="step === 1" classes="ssp" :text="['SSP 1', step >= 1 ? '🐔' : '“Sustainability”']" :wasActive="step >= 1" link="ssp1-wildcard" />
        <Box :x="width / 3 * 2" :y="height / 3 * 1" :w="width / 3.6" :h="height / 4" :isActive="step === 3" classes="ssp" :text="['SSP 3', step >= 3 ? '🌋' : '“Regional Rivalry”']" :wasActive="step >= 3" link="ssp3-wildcard" />
        <Box :x="width / 3 * 2" :y="height / 3 * 2" :w="width / 3.6" :h="height / 4" :isActive="step === 4" classes="ssp" :text="['SSP 4', step >= 4 ? '🌬️' : '“Inequality”']" :wasActive="step >= 4" link="ssp4-wildcard" />

        <line :x1="20" :x2="width - 20" :y1="height - 10" :y2="height - 10" class="axis" />
        <text :x="width / 2" :y="height - 20" text-anchor="middle" class="axis label">Challenges to adaptation</text>
        <text :x="20" :y="height - 20" text-anchor="start" class="axis" :transform="`rotate(-45, ${20}, ${height - 20})`" dominant-baseline="middle">Low</text>
        <text :x="width - 20" :y="height - 20" text-anchor="end" class="axis">High</text>

        <line :x1="10" :x2="10" :y1="20" :y2="height - 20" class="axis" />
        <text :x="20" :y="height / 2" text-anchor="middle" class="axis label" :transform="`rotate(-90, ${20}, ${height / 2})`" dominant-baseline="hanging">Challenges to mitigation</text>
        <text :x="20" :y="20" text-anchor="end" class="axis" :transform="`rotate(-90, ${20}, ${20})`" dominant-baseline="hanging">High</text>
      </svg>
    </div>
    <figcaption class="cap figcaption">Figure 4: Conceptual mapping of SSP (Shared Socioeconomic Pathways)-based Dutch-adapted wildcards onto the uncertainty space (challenges to mitigation and adaptation) of the SSPs</figcaption>
  </figure>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { scaleLinear } from 'd3-scale'
import { isUndefined, map } from 'lodash'
import Box from '~/components/Helper/Box'

export default {
  components: {
    Box
  },
  props: {
    active: {
      type: Number,
      default: 0
    }
  },
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
    ...mapState('step', [
      'step'
    ]),
    styling () {
      return { top: `calc(50% - ${this.height / 2}px)`, height: `${this.height}px` }
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
        this.height = width / 3 * 2
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .graphic--wildcards {
    display: block;

    @include query($wide) {
      position: sticky;
      grid-row-end: span 3;
    }
  }

  .values {
    font-size: 0.8rem;
  }

  .vis-container, svg {
    width: 100%;
  }

  circle {
    opacity: 0.2;
    fill: $color-neon;

    &.isActive {
      opacity: 1;
    }
  }

</style>
