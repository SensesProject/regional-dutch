<template>
  <div class="container">
    <section class="step">
      <header>
        <h4>Robust across socioeconomic scenarios</h4>
      </header>
    </section>
    <ChartPathway />
    <section class="step">
      <header>
        <h4>Synergies</h4>
      </header>
      <ul>
        <li>Agriculture and the farmer are at the centre of all themes, scales and scenarios and crucial for transformation.</li>
        <li>Agriculture can be transformed if it is complemented with energy generation.</li>
        <li>Solar panels and energy projects are considered to become a promising source of income for the region.</li>
      </ul>
    </section>
    <section class="step">
      <header>
        <h4>Challenges</h4>
      </header>
      <ul>
        <li>Land based adaptation and mitigation by using nature (e.g. plant coniferous trees, room for the river, change in crop types, invest in healthy soils) while maintaining income for the farmer as agriculture is iconic for the stability and identity of the region.</li>
        <li>Identifying who should take the lead (e.g. farmers, government, investors)</li>
      </ul>
    </section>
    <IntersectionObserver :step="6" :noStyling="true" classes="step">
      <header>
        <h2>Robust across climate impact scenarios</h2>
      </header>
      <p>Climate change does not limit itself to borders, and it is therefore important to test robustness of f pathways in relation to impacts outside the borders.  In the Dutch case study, we tested this by interpreting IMAGE and MAgPIE impact model results on crops and food production to guide the discussion on the implications of the pathways.</p>
      <p>Questions from global climate and combined climate-socioeconomic impact models may include:</p>
    </IntersectionObserver>
    <IntersectionObserver :step="7" :noStyling="true" classes="step">
      <header>
        <h3>Question 1</h3>
      </header>
      <p>Socio-economic and climate impacts: What are the effects of changing diets towards less environmentally intensive consumption (less meat etc.) associated with a decrease in global food prices?</p>
      <h4>Change in diet</h4>
      <ul>
        <li>Discussion if less meat also means less dairy, maybe even an increase in local dairy consumption. Which can enhance niche-markets.</li>
        <li>Farmers who are ‘front runners’ will try other crops such as nuts which could be lucrative and drought resistant. These farmers act as an example for niche-markets.</li>
        <li>Regional circular economies emerge at different speeds.</li>
      </ul>
    </IntersectionObserver>
    <IntersectionObserver :step="8" :noStyling="true" classes="step">
      <header>
        <h3>Question 2</h3>
      </header>
      <p>Climate impacts: Grasslands might be affected negatively across Europe from climate change. What are the opportunities and challenges for the use of land for energy?</p>
      <h4>Bio-energy</h4>
      <ul>
        <li>If farmers use their land to produce energy, for example use their grassland for biofuel, energy prices need to rise. Grasslands can handle drought shocks better compared to other cops.</li>
      </ul>
    </IntersectionObserver>
    <IntersectionObserver :step="9" :noStyling="true" classes="step">
      <header>
        <h3>Question 3</h3>
      </header>
      <p>Global mitigation policies: What are the effects of mitigation policies on land-use trade-offs?</p>
      <h4>Land-use for mitigation</h4>
      <ul>
        <li>Using land with fertile soils to make a solar field is a waste of your soil. Soil quality should be leading in this decision. Same is for reforestation, soil quality should enable tree growing and not the other way around.</li>
        <li>Trade-offs between buy-out or subsidising mitigation.</li>
      </ul>
    </IntersectionObserver>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ChartPathway from '~/components/Chart-Pathway'
import IntersectionObserver from 'library/src/components/IntersectionObserver'

export default {
  components: {
    ChartPathway,
    IntersectionObserver
  },
  methods: {
    ...mapActions('step', [
      'setStep'
    ])
  },
  mounted () {
    this.$on('step', (step) => {
      this.setStep(step)
    })
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

</style>
