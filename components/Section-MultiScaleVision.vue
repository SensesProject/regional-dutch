<template>
  <div class="container">
    <section class="step">
      <header>
        <h2>Multi-scale vision</h2>
      </header>
      <p>In the Dutch case study area, multiple objectives across multiple scales exist in order to reach long-term targets. We adapted the quality criteria from Wiek and Iwaniek (2014) to address the inclusion of potential trade-offs across scales. To this end, Dutch policy documents and policy visions relevant for climate mitigation and adaptation targets were screened. We identified policy targets three scales: local (Vecht), regional (province of Overijssel), national (the Netherlands). We furthermore identified four cross-cutting themes: (1) land use and agriculture, (2) climate & energy, (3) socioeconomic development and (4) nature.</p>
    </section>
    <section class="graphic layout--right-wide">
      <ChartVision />
    </section>
  </div>
</template>

<script>
import ChartVision from '~/components/Chart-Vision'

export default {
  components: {
    ChartVision
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

</style>
