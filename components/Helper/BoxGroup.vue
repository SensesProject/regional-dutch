<template>
  <g>
    <Box :x="x" :y="y + 59" h="default" :color="color" :text="text" />
    <Box :x="x" :y="y" w="default" h="default" color="white" :text="head" font="small" :link="link" />
  </g>
</template>

<script>
import Box from '~/components/Helper/Box'

export default {
  components: {
    Box
  },
  props: {
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: 'white'
    },
    head: {
      type: Array,
      default: () => []
    },
    text: {
      type: Array,
      default: () => []
    },
    link: {
      type: [String, Boolean],
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

</style>
