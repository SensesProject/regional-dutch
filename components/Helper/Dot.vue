<template>
  <g v-tooltip="label">
    <circle
      class="p2"
      :cx="x + 'px'"
      :cy="y + 'px'"
      :r="`${isSmall ? 7 : 12}px`"
    />
    <circle
      class="p1"
      :cx="x + 'px'"
      :cy="y + 'px'"
      :r="`${isSmall ? 2 : 4}px`"
    />
    <circle
      class="p3"
      :cx="x + 'px'"
      :cy="y + 'px'"
      :r="`${isSmall ? 6 : 10}px`"
    />
    <circle
      :style="{ transformOrigin: `${x}px ${y}px`}"
      class="p4"
      :cx="x + 'px'"
      :cy="y + 'px'"
      :r="`${isSmall ? 8 : 15}px`"
    />
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
    label: {
      type: String,
      default: ''
    },
    isSmall: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  @keyframes pulse {
    0% {
      transform: scale(1.0);
      opacity: 1;
    }
    100% {
      transform: scale(1.8);
      opacity: 0;
    }
  }

  circle {
    &.p1 {
      fill: $color-neon;
    }

    &.p2 {
      fill: #fff;
      fill-opacity: 0.7;
    }

    &.p3 {
      fill: $color-neon;
      fill-opacity: 0.3;
      stroke: $color-neon;
      stroke-opacity: 0.4;
    }

    &.p4 {
      fill: transparent;
      stroke: $color-neon;
      stroke-opacity: 0.4;
      animation: pulse 1.5s ease infinite;
    }
  }

</style>
