<template>
  <div class="container">
    <section class="step step--columns">
      <header>
        <span class="caption">Part 1</span>
        <h2>Integrating and analysing existing knowledge</h2>
      </header>
      <div class="content">
        <p>The first part of this module explains how bottom-up knowledge on the Overijsselse Vecht has been systemically analysed using a co-production technique from the <a href="https://climatescenarios.org/finder/techniques/?grouping=system%20dynamics%7Csystem%20dynamics%20-%20probabilities" target="_blank">System Dynamics group</a>, which is a co-production technique group devoted to understanding systemic relationships and interlinkages between system drivers. Representative stakeholders have been invited to scoping interviews to explore the local knowledge on the use and development of scenarios and to investigate key climate related challenges for the present and the future in the Overijsselse Vecht, up to 2050.</p>
        <p>The results have been analysed with <a href="https://climatescenarios.org/finder/techniques/?name=fuzzy%20cognitive%20mapping" target="_blank">Fuzzy Cognitive Maps</a> to integrate current perceptions in the region. A total of 14 concepts and 4 drivers represent the perceptual system understanding of the  scoping interviews: climate-smart land use. Climate-smart land use relates to the trade-offs between land use for agriculture, nature and energy, given the socioeconomic and physical properties of the Overijsselse Vecht studied in the region and identified by stakeholders. The systemic trade-offs are presented interactively in the Fuzzy Cognitive Maps of Figure 1, by clicking on single drivers to visualise how they directly or indirectly  influence climate smart land use.</p>
        <p>The results of the analysis highlight several possible trade-offs related to the use of land, particularly in stakes related to agricultural practices and socioeconomic development.</p>
      </div>
    </section>
    <figure class="graphic layout--wide">
      <ChartNetworkInteractive />
      <figcaption class="cap figcaption">Figure 1: Fuzzy Cognitive Map visualising drivers of change and their interactions in the Dutch Overijsselse Vecht case study. The green arrows between the boxes indicate relationships that positively influence each other while red arrows between the boxes indicate relationships that negatively influence each other. The darkness of the arrow indicates the strength of the relationship; the darker the arrow, the stronger the relationship. The graphs for each driver indicate relative state changes of the driver alongside the iteration process (not time) and can be compared by hovering over the driver.</figcaption>
    </figure>
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
