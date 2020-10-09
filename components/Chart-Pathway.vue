<template>
  <section class="graphic graphic--pathway" :style="styling">
    <div ref="vis" class="vis-container">
      <svg
        class="vis"
        :width="width + 'px'"
        :height="height + 'px'"
        :viewBox="`0 0 ${width} ${height}`"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g v-if="step < 7">
          <Box :x="x(106)" :y="y(165)" :w="w * 1.3" :h="h" color="white" :text="['Nature &', 'Climate and', 'Energy']" font="big" />
          <Box :x="x(106)" :y="y(417)" :w="w * 1.3" :h="h" color="white" :text="['Agriculture &', 'socio-', 'economics']" font="big" />
        </g>

        <Ball :x="x(384)" :y="y(93)" :w="w" :h="h" :text="['Regional energy', 'strategies']" />
        <Ball :x="x(539)" :y="y(93)" :w="w" :h="h" :text="['Change of', 'the concept', 'of ’nature‘']" />
        <Ball :x="x(461)" :y="y(201)" :w="w" :h="h" :text="['Change laws', 'and regulations', 'e.g. concession']" />
        <Ball :x="x(673)" :y="y(201)" :w="w" :h="h" :text="['Accepting', 'variabiltiy']" />
        <Ball :x="x(596)" :y="y(309)" :w="w" :h="h" :text="['System', 'thinking']" />
        <Ball :x="x(751)" :y="y(309)" :w="w" :h="h" :text="['Mentality', 'change']" />
        <Ball :x="x(1019)" :y="y(165)" :w="w" :h="h" :text="['Agriculture as', 'energy supplier']" />
        <Ball :x="x(942)" :y="y(273)" :w="w" :h="h" :text="['Agricultural', ' sector as', ' a buffer']" />
        <Ball :x="x(1097)" :y="y(273)" :w="w" :h="h" :text="['Extensive', 'agriculture']" />
        <Ball :x="x(876)" :y="y(417)" :w="w" :h="h" :text="['Farmer has', 'a new business', 'model']" />
        <Ball :x="x(453)" :y="y(417)" :w="w" :h="h" :text="['successful', 'nice markets']" />
        <Ball :x="x(298)" :y="y(417)" :w="w" :h="h" :text="['Farmer as', 'land steward']" />

        <Loop :x="x(461)" :y="y(129)" :m="true" />
        <Loop :x="x(1019)" :y="y(236)" />
        <Loop :x="x(673)" :y="y(272)" />
        <Loop :x="x(375)" :y="y(417)" :n="2" />

        <Ball v-if="step === 7" :x="x(208)" :y="y(370)" :w="w" :h="h" color="red" :text="['Farmer as', 'land steward']" />
        <Ball v-if="step === 7" :x="x(388)" :y="y(370)" :w="w" :h="h" color="red" :text="['Farmer as', 'land steward']" />
        <Ball v-if="step === 7" :x="x(298)" :y="y(503)" :w="w" :h="h" color="red" :text="['Farmer as', 'land steward']" />

        <Loop v-if="step === 7" :x="x(298)" :y="y(412)" :m="true" color="red" />

        <Ball v-if="step === 8" :x="x(843)" :y="y(165)" :w="w" :h="h" color="green" :text="['Farmer as', 'land steward']" />

        <Ball v-if="step === 9" :x="x(83)" :y="y(165)" :w="w" :h="h" color="blue" :text="['Farmer as', 'land steward']" />
        <Ball v-if="step === 9" :x="x(238)" :y="y(165)" :w="w" :h="h" color="blue" :text="['Farmer as', 'land steward']" />

        <Loop v-if="step === 9" :x="x(160.5)" :y="y(165)" :n="2" color="blue" />

        <g v-if="step < 7">
          <Dot :x="x(461)" :y="y(129)" label="In the near future, the development of regional energy strategies provide the opportunity to link various energy strategies, linked to small scale energy projects that fit into the landscape. This stimulates a change in concession rights to enhance, for instance, energy-smart and efficient farms. Various stakeholders reach the agreement that Natura 2000 nature conservation objectives are not feasible. At least not in its current form. Altogether, this stimulates a more systematic way of thinking. " />
          <Dot :x="x(1019)" :y="y(236)" label="Crucially, this means that livestock farming was abandoned in 2050. It is also accepted that due to its variability, less navigation on the Vecht river is possible due to the variable depth and increase of extremes. The agricultural sector is strongly integrated in the energy sector (agriculture is the 2nd and 3rd energy supplier). The agricultural sector becomes a 'social buffer' for changes in population dynamics (i.e. inflows, depopulation to urban centers)." />
          <Dot :x="x(673)" :y="y(272)" label="System thinking stimulates a mentality change towards a sustainable and agricultural inclusive landscape management. In general, variability becomes an accepted principle that encompasses nature and the landscape in general, also in view of the increasing climate change and effects. By 2030, all these transformations will result in circular systems that replace more intensive production and focus on expansion with efficiency and recycling (e.g. Fewer fertilizer imports, mineral imports recycled from sewage, from and energy production in farms)." />
          <Dot :x="x(375)" :y="y(417)" label="Farmers play a central role as land stewards. The current pressure for intensification is being converted into a more holistic approach at landscape level, including both sustainability objectives and the interests of farmers, creating the opportunity for niche markets. The focus on the farmer as a factor with limitations is reversed to the farmer as a central factor of a systemic change that goes beyond the farm. New business models with new sources of profit and subsidies for landscape management are increasing." />
        </g>

        <line :x1="20" :x2="width - 20" :y1="height - 10" :y2="height - 10" class="axis" />
        <text :x="20" :y="height - 20" text-anchor="start" class="axis">Now</text>
        <text :x="width - 20" :y="height - 20" text-anchor="end" class="axis">2050</text>

      </svg>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { scaleLinear } from 'd3-scale'
import { isUndefined, map } from 'lodash'
import Ball from '~/components/Helper/Ball'
import Dot from '~/components/Helper/Dot'
import Box from '~/components/Helper/Box'
import Loop from '~/components/Helper/Loop'

export default {
  components: {
    Ball,
    Dot,
    Box,
    Loop
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
    },
    w () {
      return 140 / 1200 * this.width
    },
    h () {
      return 140 / 1200 * this.width * 0.8
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
        this.height = width / 2
      }
    },
    x (v) {
      return v / 1200 * this.width
    },
    y (v) {
      return v / 600 * this.height
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
