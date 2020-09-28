<template>
  <component
    :is="link ? 'a' : 'g'"
    :href="link ? link : false"
    class="box"
    :class="{ 'box--link': link }"
    target="_blank">
    <title v-if="false">Open techniques in the Finder</title>
    <rect :x="x - width / 2" :y="y - height / 2" :width="width" :height="height" :class="`rect rect--${color}`" rx="2" ry="2" />
    <text :y="y + 10 - (text.length - 1) * (lineHeight / 2)" text-anchor="middle" :class="`text text--${color} text--${font}`">
      <tspan v-for="(t, i) in text" :x="x" :dy="i * lineHeight">{{ t }}</tspan>
    </text>
    <text v-if="link" class="text text--icon" :x="x + width / 2 - 8" :y="y - height / 2 + 20" text-anchor="end">↗</text>
  </component>
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
      type: String,
      default: 'wide'
    },
    h: {
      type: String,
      default: 'tall'
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
    }
  },
  computed: {
    width () {
      switch (this.w) {
        case 'side':
          return 350
        case 'default':
          return 320
        case 'narrow':
          return 180
        default:
          return 300
      }
    },
    height () {
      switch (this.h) {
        case 'default':
          return 60
        default:
          return 100
      }
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
