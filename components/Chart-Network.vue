<template>
  <ul>
    <li
      v-for="([label, index, isActive, isDriver]) in elements"
      :key="index">
      <span
        v-if="isDriver"
        :class="['driver', { isActive }]"
        @click="() => toggleDriver(index)">
        <input type="checkbox" :checked="Boolean(isActive)" /> {{ label }}
      </span>
      <span v-else>{{ label }}</span>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { has, get, set, isUndefined, isNaN, forEach, map } from 'lodash'

export default {
  computed: {
    ...mapState('driver', [
      'drivers'
    ]),
    elements () {
      const elements =  [
        ['change to new business models', true],
        ['current agricultural practices', false],
        ['growing of local economy', false],
        ['environmental focussed policy', false],
        ['climate smart land use', false],
        ['demography population decline', true],
        ['public opinion (as in SSP1)', false],
        ['regional income from recreation', false],
        ['energy transition', false],
        ['spatial room for nature', false],
        ['landscape value importance', false],
        ['extreme climate events', true],
        ['biodiversity increase', false],
        ['technology investment', true],
      ]

      return map(elements, ([label, isDriver], index) => {
        return [label, index, this.drivers[index], isDriver]
      })
    }
  },
  methods: {
    ...mapActions('driver', [
      'toggleDriver'
    ])
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .isActive {
    font-weight: bold;
  }

  .driver {
    cursor: pointer;
    color: $color-neon;
  }

</style>
