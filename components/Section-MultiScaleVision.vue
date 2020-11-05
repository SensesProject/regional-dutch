<template>
  <div class="container">
    <section class="step">
      <header>
        <h2>A multiscale vision for the Vecht</h2>
      </header>
      <p>The second part of this module explains how current policy objectives (relevant to the Overijsselse Vecht region and to the challenges identified in Part 1) have been assessed and integrated using the <a href="https://climatescenarios.org/finder/?name=VISIONING" target="_blank">vision technique</a>. Because several visions and long-term targets relevant to the Overijsselse Vecht already exist, the vision we present is indirectly participatory because it integrates existing visions and policy plans that have been developed already with stakeholders. The process includes adapting quality criteria from the visioning literature to include potential trade-offs across scales hence translating existing visions into a “multiscale vision”. Dutch policy documents and policy visions relevant for climate mitigation and adaptation targets were screened at three policy levels: local (Vecht), regional (province of Overijssel) and national (the Netherlands). The analysis of these documents resulted in the identification four cross-cutting themes: <span class="sector">land use and agriculture</span>, <span class="sector">climate & energy</span>, <span class="sector">socioeconomic development</span> and <span class="sector">nature</span>. Individual objectives are cross-referenced according to their policy-level and cross-cutting theme.</p>
      <h4>The Netherlands</h4>
      <ul>
        <li><a href="https://wetten.overheid.nl/BWBR0042394/2020-01-01#Hoofdstuk2" target="_blank">Dutch Climate Law, 2019 (klimaatwet)</a></li>
        <li><a href="https://publicaties.energieakkoordser.nl/2018/domein_1_nieuw" target="_blank">Dutch Energy Agreement 2018 (Energieakkoord)</a></li>
        <li><a href="https://ruimtelijkeadaptatie.nl/overheden/nas/" target="_blank">National Adaptation Strategy, 2016 (nationale klimaatadaptatie strategie)</a></li>
        <li><a href="https://ruimtelijkeadaptatie.nl/overheden/deltaplan-ra/" target="_blank">Delta plan spatial adaptation, 2018 (Deltaplan Ruimtelijke adaptatie)</a></li>
      </ul>
      <h4>Province of Overijssel</h4>
      <ul>
        <li><a href="https://ruimtelijkeadaptatie.nl/voorbeelden/@190487/rap-overijssel/  " target="_blank">Regional Adaptation Plan Overijssel, 2017 (Regionaal adaptatie plan Overijssel)</a></li>
        <li>Multiple Cohesive Energy – Agriculture Reports (2019) </li>
        <li><a href="https://www.trendbureauoverijssel.nl/wp-content/uploads/2019/02/situatie_gewijzigd_spreads.pdf" target="_blank">Toekomstverkenning naar het Landschap van Overijssel in 2050</a></li>
        <li><a href="https://edepot.wur.nl/463277" target="_blank">Analyse verduurzamingsopgaven landelijk gebied Overijssel richting 2050</a></li>
      </ul>
      <h4>Local Vecht region (general goals from existing visions)</h4>
      <ul>
        <li>Climate axis Vechtdal (2019)</li>
        <li>Lumbricus Vision for the Vecht (2019)</li>
        <li><a href="http://devecht.eu/vechtvisie/artikel-0/" target="_blank">Cross-border vision, 2009 (Grensoverschrijdende Vechtvisie) </a></li>
        <li>Vision Vechtdal (2000)</li>
      </ul>
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

  ul {
    margin-bottom: 2rem;
    padding-left: 0.5rem;
    margin-top: 0.3rem;

    li {
      padding-left: 0.5rem;
      margin-bottom: 0.2rem;
    }
  }

  .sector {
    text-transform: uppercase;
    letter-spacing: 0.02em;
    font-size: 0.9em;
  }

</style>
