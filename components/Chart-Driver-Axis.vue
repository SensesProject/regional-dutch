<template>
  <g>
    <line
      class="axis"
      :x1="axis.x"
      :x2="axis.x"
      :y1="margin.top"
      :y2="height - margin.bottom"
    />
    <transition-group name="fade" tag="g">
      <g
        v-for="tick in axis.ticks"
        :key="tick.key"
      >
        <text
          :y="tick.y + 'px'"
          :x="d * 5.5 + 'px'"
          text-anchor="end"
          dominant-baseline="middle"
          class="tick"
        >
          {{ tick.label }}
        </text>
        <line
          :x1="margin.left + 'px'"
          :y1="tick.y + 'px'"
          :x2="d * 6 + 'px'"
          :y2="tick.y + 'px'"
          class="tick"
        />
      </g>
    </transition-group>
    <g>
      <rect
        class="background"
        :x="scaleX.range()[0] - 1"
        :width="2"
        :height="boxHeight + boxMargin"
        :y="boxY - boxOffset"
      />
      <text
        v-for="group in ['label label--background', 'axis']"
        :key="group"
        ref="text"
        :class="`${group} axis--reading outline`"
        :y="label.today[1] + 'px'"
        text-anchor="start"
      >
        <tspan
          v-for="(text, i) in label.texts"
          :key="text"
          :ref="i === 0 ? 'value' : 'texts'"
          :dominant-baseline="i === 0 ? 'middle' : 'baseline'"
          :x="0 + 'px'"
          :dy="i === 0 ? '' : '1.5em'"
        >
          {{ text }}
        </tspan>
      </text>
      <line
        class="swoop"
        :x1="boxWidth + 5"
        :x2="label.today[0]"
        :y1="label.today[1]"
        :y2="label.today[1]"
      />
    </g>
  </g>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { map, mean, last, find, get, inRange } from 'lodash'

export default {
  props: ['margin', 'scaleY', 'scaleX'],
  computed: {
    d () {
      return this.margin.left / 7
    },
    axis () {
      const { scaleY, scaleX, d } = this
      const x = scaleX(scaleX.domain()[0])
      return {
        label,
        x,
        y,
        ticks: map(scaleY.ticks(6), (tick, i) => {
          const y = scaleY(tick)
          const threshold = 10
          const isVisible = !inRange(y, this.boxY - this.boxOffset - threshold, this.boxY + this.boxHeight + this.boxMargin + threshold)
          return {
            key: i,
            label: f(tick / 1000),
            y,
            isVisible,
            x: d
          }
        }).filter(d => d.isVisible)
      }
    }
  }
}
</script>
