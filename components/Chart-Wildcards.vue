<template>
  <section class="graphic graphic--wildcards" :style="styling">
    <div ref="vis" class="vis-container">
      <svg
        class="vis"
        :width="width + 'px'"
        :height="height + 'px'"
        :viewBox="`0 0 ${width} ${height}`"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <circle :class="{ isSmall, isActive: step === 5 }" :cx="width / 3 * 1" :cy="height / 3 * 1" :r="(width / 5) / 2" />
        <circle :class="{ isSmall, isActive: step === 1 }" :cx="width / 3 * 1" :cy="width / 3 * 2" :r="(width / 5) / 2" />
        <circle :class="{ isSmall, isActive: step === 3 }" :cx="width / 3 * 2" :cy="width / 3 * 1" :r="(width / 5) / 2" />
        <circle :class="{ isSmall, isActive: step === 4 }" :cx="width / 3 * 2" :cy="width / 3 * 2" :r="(width / 5) / 2" />

        <text v-if="!isSmall" :x="width / 3 * 1" :y="height / 3 * 1" text-anchor="middle">Wildcard “Fossil Fuel” SSP5</text>
        <text v-if="!isSmall" :x="width / 3 * 1" :y="width / 3 * 2" text-anchor="middle">Wildcard SSP1 “Sustainability”</text>
        <text v-if="!isSmall" :x="width / 3 * 2" :y="width / 3 * 1" text-anchor="middle">Wildcard SSP3 “Regional Rivalry”</text>
        <text v-if="!isSmall" :x="width / 3 * 2" :y="width / 3 * 2" text-anchor="middle">Wildcard “Inequality” SSP4</text>
      </svg>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { scaleLinear } from 'd3-scale'
import { isUndefined, map } from 'lodash'

export default {
  props: {
    isSmall: {
      type: Boolean,
      default: true
    },
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

  circle {
    opacity: 0.2;
    fill: $color-neon;

    &.isActive {
      opacity: 1;
    }
  }

</style>
