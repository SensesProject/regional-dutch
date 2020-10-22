<template>
  <div class="container">
    <section class="step">
      <header>
        <h2>System analysis</h2>
      </header>
      <p>Scoping interviews with stakeholders in the Dutch case study region have been analysed with Fuzzy Cognitive Maps (Kosko 1986, Kok 2009)  to conduct a system analysis of perceptions in the region. A total of 14 concepts and 4 drivers represent perceptual system understanding around the focus of the interviews: climate smart land use. Climate smart land use is defined as the optimal trade-off between adaptive and mitigative land use for the Vecht, or more concrete, the optimal trade-off between land use for agriculture, nature and energy. Click on the drivers to see how they influence climate smart land use directly or indirectly.</p>
    </section>
    <section class="graphic layout--wide">
      <ChartNetworkInteractive />
    </section>
  </div>
</template>

<script>
import ChartNetworkInteractive from '~/components/Chart-Network-Interactive'

export default {
  components: {
    ChartNetworkInteractive
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

</style>
