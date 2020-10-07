<template>
  <g
    class="box"
    :class="{ isActive }">
    <rect :x="x - width / 2" :y="y - height / 2" :width="width" :height="height" :class="`rect rect--${color}`" rx="2" ry="2" />
    <text :y="y + 5 - (text.length - 1) * (lineHeight / 2)" text-anchor="middle" :class="`text text--${color} text--${font}`">
      <tspan v-for="(t, i) in text" :x="x" :dy="i * lineHeight" :class="{ isFirst: i === 0}">{{ t }}</tspan>
    </text>
    <text v-if="link" class="text text--icon" :x="x + width / 2 - 8" :y="y - height / 2 + 20" text-anchor="end">↗</text>
  </g>
</template>

<script>
export default {
  props: {
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
    font: {
      type: String,
      default: 'default'
    },
    w: {
      type: Number,
      default: 150
    },
    h: {
      type: Number,
      default: 150
    },
    color: {
      type: String,
      default: 'white'
    },
    text: {
      type: Array,
      default: () => []
    },
    link: {
      type: [String, Boolean],
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    width () {
      return this.w
    },
    height () {
      return this.h
    },
    lineHeight () {
      switch (this.font) {
        case 'big':
          return 30
        default:
          return 20
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

</style>
