<template>
  <g
    class="ball"
    :class="[classes, { isActive }]">
    <rect :x="x - width / 2" :y="y - height / 2" :width="width" :height="height" :class="`rect rect--${color}`" :rx="width / 2" :ry="width / 2" />
    <text :y="y + 5 - (text.length - 1) * (lineHeight / 2)" text-anchor="middle" :class="`text text--${color} text--${font}`">
      <tspan v-for="(t, i) in text" :x="x" :dy="i ? lineHeight : 0">{{ t }}</tspan>
    </text>
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
    },
    classes: {
      type: String,
      default: ''
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
          return 15
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

</style>
