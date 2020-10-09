<template>
  <g>
    <g v-if="n === 3">
      <path
        :class="`color--${color}`"
        :transform="`rotate(${m ? -117.5 : 62.5})`"
        :style="{ 'transform-origin': `${x}px ${y}px` }"
        :d="`M ${x - 15} ${y - 60} C ${x - 5} ${y - 65} ${x + 5} ${y - 65} ${x + 15} ${y - 60}`"
      />
      <path
        :class="`color--${color}`"
        :transform="`rotate(${m ? 117.5 : -62.5})`"
        :style="{ 'transform-origin': `${x}px ${y}px` }"
        :d="`M ${x - 15} ${y - 60} C ${x - 5} ${y - 65} ${x + 5} ${y - 65} ${x + 15} ${y - 60}`"
      />
      <path
        :class="`color--${color}`"
        :transform="`rotate(${m ? 0 : 180})`"
        :style="{ 'transform-origin': `${x}px ${y}px` }"
        :d="`M ${x - 23} ${y - 55} C ${x - 10} ${y - 65} ${x + 10} ${y - 65} ${x + 23} ${y - 55}`"
      />
    </g>
    <g v-if="n === 2">
      <path
        :class="`color--${color}`"
        :transform="`rotate(0)`"
        :style="{ 'transform-origin': `${x}px ${y}px` }"
        :d="`M ${x - 25} ${y - 32} C ${x - 10} ${y - 42} ${x + 10} ${y - 42} ${x + 25} ${y - 32}`"
      />
      <path
        :class="`color--${color}`"
        :transform="`rotate(180)`"
        :style="{ 'transform-origin': `${x}px ${y}px` }"
        :d="`M ${x - 25} ${y - 32} C ${x - 10} ${y - 42} ${x + 10} ${y - 42} ${x + 25} ${y - 32}`"
      />
    </g>
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
    n: {
      type: Number,
      default: 3
    },
    m: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'gray'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  path {
    stroke: getColor(gray, 70);
    stroke-dasharray: 3, 2;

    &.color--red {
      stroke: getColor(red, 80);
    }

    &.color--blue {
      stroke: getColor(blue, 80);
    }
  }

</style>
