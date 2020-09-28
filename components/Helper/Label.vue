<template>
  <component
    :is="link ? 'a' : 'g'"
    :href="link ? link : false"
    class="label"
    :class="{ 'label--link': link }"
    target="_blank">
    <text :x="x" :y="y" text-anchor="middle" :class="`text text--alt`">
      {{ text }}
    </text>
    <text v-if="link" class="text text--icon" :x="x + 40" :y="y - 10" text-anchor="end">↗</text>
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
    link: {
      type: [String, Boolean],
      default: false
    },
    text: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

</style>
