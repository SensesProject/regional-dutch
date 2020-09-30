<template>
  <div class="drivers-wrapper">
    <div v-for="(line, index) in lines" class="driver" @mouseenter="() => hoverDriver(index)" @mouseleave="() => hoverDriver(null)">
      <h5>{{ line }}</h5>
      <ChartDriver :index="index" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ChartDriver from '~/components/Chart-Driver2'

const lines = [
  'Business models',
  'Agricultural practices',
  'Local economy',
  'Environmental policy',
  'Smart land use',
  'Demography population',
  'Public opinion',
  'Income from recreation',
  'Energy transition',
  'Room for nature',
  'Landscape value',
  'Climate events',
  'Biodiversity',
  'Technology investment'
]

export default {
  components: {
    ChartDriver
  },
  data () {
    return {
      lines
    }
  },
  methods: {
    ...mapActions('driver', [
      'hoverDriver'
    ])
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .drivers-wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 1.5rem;
    grid-row-gap: 0rem;
    // align-content: space-between;

    .driver {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    h5 {
      display: block;
      line-height: 1.1;
      font-weight: $font-weight-bold;
      hyphens: auto;
      // border-bottom: 1px solid getColor(gray, 80);
    }
  }

</style>
