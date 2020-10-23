<template>
  <g>
    <defs v-if="isArrow">
      <marker :id="id" markerWidth="8" markerHeight="8" refX="4" refY="4" markerUnits="userSpaceOnUse" orient="auto">
        <path
          :style="{ 'transform': `rotate(${-90}deg)`}"
          :transform-origin="`${4} ${4}`"
          class="marker"
          d="M0, 1 L4, 5 L8, 1" />
      </marker>
    </defs>
    <path
      :class="{ isThick }"
      :d="`M ${x1} ${y1} A ${radius} ${radius} ${angle} ${0} ${isTop ? 1 : 0} ${x2} ${y2}`"
      :marker-end="isArrow ? `url(#${id})` : ''"
    />
  </g>
</template>

<script>
export default {
  props: {
    x1: {
      type: Number,
      default: 0
    },
    y1: {
      type: Number,
      default: 0
    },
    x2: {
      type: Number,
      default: 0
    },
    y2: {
      type: Number,
      default: 0
    },
    isTop: {
      type: Boolean,
      default: false
    },
    isThick: {
      type: Boolean,
      default: false
    },
    isArrow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    id () {
      const { x1, x2, y1, y2 } = this
      return 'arrow-' + [x1, x2, y1, y2].join('')
    },
    angle () {
      return Math.atan2(this.y2 - this.y1, this.x2 - this.x1) * 180 / Math.PI
    },
    radius () {
      const distance = Math.sqrt(Math.abs((this.x1 - this.x2) ** 2 + (this.y1 - this.y2) ** 2))
      console.log(distance, distance * 15, distance * 2, distance ^ 2)
      return distance;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  path {
    stroke: getColor(gray, 70);
    stroke-dasharray: 3, 2;

    &.isThick {
      stroke-width: 1px;
      stroke-dasharray: 4, 2;
      stroke: getColor(gray, 50);
    }

    &.marker {
      stroke-width: 1px;
      stroke-dasharray: 0;
      stroke: getColor(gray, 50);
    }
  }

</style>
