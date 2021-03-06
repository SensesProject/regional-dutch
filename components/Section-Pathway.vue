<template>
  <div class="container">
    <section class="step">
      <h4>Robust pathways across socioeconomic scenarios with synergies and challenges between the four overarching vision themes</h4>
      <p>The points raised by the wildcards resulted in the identification of robust synergies and challenges between the four vision themes. The synergies and challenges were captured by loops within the pathway. These loops relate to topics including: clarifying the role of farmers as land stewards; development of regional land use policy, particularly related to energy and agricultural development; changes in the mentality and attitudes towards accepting variability; and the transformation of the agricultural sector as an energy supplier. The synergies and challenges are cross-cutting  SSP-based wildcards and are therefore robust across broad socioeconomic scenarios.</p>
      <strong>Synergies</strong>
      <ul class="list-interactive">
        <li @mouseenter="() => setLoop('farmer')" @mouseleave="setLoop">Agriculture and the farmer are at the centre of all themes and scenarios and are perceived to be crucial for transformation.</li>
        <li @mouseenter="() => setLoop('agriculture')" @mouseleave="setLoop">Agriculture can be transformed if it is complemented with energy generation</li>
        <li @mouseenter="() => setLoop('strategies')" @mouseleave="setLoop">Solar panels and energy projects are considered to become a promising source of income for the region.</li>
        <li @mouseenter="() => setLoop('system')" @mouseleave="setLoop">A system perspective will enhance a mentality change towards a circular system.</li>
      </ul>
      <strong>Challenges</strong>
      <ul class="list-interactive">
        <li @mouseenter="() => setLoop('business')" @mouseleave="setLoop">Land based adaptation and mitigation by using nature (e.g., plant coniferous trees, room for the river, change in crop types, invest in healthy soils) while maintaining income for the farmer as agriculture is iconic for the stability and identity of the region. However, this also implies identifying who should take the lead (e.g., farmers, government, investors)</li>
      </ul>
    </section>
    <ChartPathway :isSticky="true" />
    <IntersectionObserver :step="6" :noStyling="true" classes="step">
      <header>
        <span class="caption caption--2">Step 2</span>
        <h3>Robust across climate impact scenarios</h3>
      </header>
      <p>The synergies and challenges in the pathway's loops need to be robust also across climate change impacts. Climate change does not limit itself to borders and climate change might severely affect the Overijsselse Vecht, independently of the mitigation strategies in place locally. In the Dutch case study, we accomplished this by interpreting IMAGE and MAgPIE impact model projections on crops and food production to guide the discussion on the implications for the pathways. We furthermore elucidated the global SSP assumptions behind the model projections (input and output) and guided the discussion about these assumptions for the pathways. In order to facilitate the discussion, we developed questions aimed at translating the model information towards implications for the pathways. A few examples of these questions follow.</p>
      <p>Questions from global climate and combined climate-socioeconomic impact models include:</p>
    </IntersectionObserver>
    <IntersectionObserver :step="7" :noStyling="true" classes="step question">
      <h4>Question 1</h4>
      <p>Socio-economic and climate impacts: What are the effects of changing diets towards less environmentally intensive consumption (less meat etc.) associated with a decrease in global food prices?</p>
      <ChartTime>
        <template v-slot:header>
          <strong>Food price</strong>
          <h6>Relative change projections of food price</h6>
        </template>
        <template v-slot:footer>
          <span>Figure 5. IMAGE projections of relative change in food price between 2000 and 2100 for different SSP scenarios. With the courtesy of Jonathan Doelman (PBL, The Netherlands</span>
        </template>
      </ChartTime>
      <strong>Change in diet</strong>
      <ul class="question-1">
        <li><span>Discussion if less meat also means less dairy, maybe even an <strong>increase in local dairy consumption</strong>. This can enhance niche markets.</span></li>
        <li><span>Farmers who are <strong>‘front runners’</strong> will try other crops such as nuts which could be lucrative and drought resistant. These farmers act as an example for niche markets.</span></li>
        <li><span>Regional circular economies emerge at <strong>different speeds</strong>.</span></li>
      </ul>
    </IntersectionObserver>
    <IntersectionObserver :step="8" :noStyling="true" classes="step question wildcard">
      <h4>Question 2</h4>
      <p>Climate impacts: Grasslands might be affected negatively across Europe from climate change. What are the opportunities and challenges for the use of land for energy?</p>
      <div class="graphic" v-tooltip="{ content: 'Climate impacts will affect regions differently depending on both the magnitude of climate change and local conditions. Uncertainty about impacts relates also to climate model uncertainty, as visualised in the spatial variability of impacts modelled under 4 global climate models for RCP2.6 and RCP6.0. Visualisation of impacts should therefore be treated as an indication of broad trends.<br />In this case, the overall trend suggests that climate change could affect managed grassland adversely, particularly in Eastern and Central Europe. This might have effects on, for example, supply of forage and bioenergy energy production. Indirect effects might involve regulatory functions, such as soil fertility, erosion and flood prevention, particularly in the most impacted areas.', offset: 5 }">
        <h5>Managed grasslands (RCP2.6)</h5>
        <video src="videos/pastures_in_rcp26soc_gfdl-esm2m_landuse-15crops_annual.webm" autoplay muted loop controls></video>
        <h5>Managed grasslands (RCP6.0)</h5>
        <video src="videos/pastures_in_rcp60soc_gfdl-esm2m_landuse-15crops_annual.webm" autoplay muted loop controls></video>
        <footer><span>Figure 6. MAgPIE projections of managed grassland cover for RCP 6.0. With the courtesy of Jan Volkholz (PIK, Germany).</span></footer>
      </div>
      <strong>Bio-energy</strong>
      <ul class="question-2">
        <li><span>If farmers use their land to produce energy, for example by using their grassland for biofuel, <strong>energy prices need to rise</strong>. Grasslands can handle drought shocks better compared to other crops. </span></li>
      </ul>
    </IntersectionObserver>
    <IntersectionObserver :step="9" :noStyling="true" classes="step question wildcard">
      <h4>Question 3</h4>
      <p>Global mitigation policies: What are the effects of mitigation policies on land-use trade-offs?</p>
      <p>The Dutch government has committed to the mitigation of climate change, which implies climate investments both nationally and internationally (especially in developing countries). This presents opportunities and challenges for local land-use, which are further complicated by the uncertainty in socioeconomic and climate impacts.</p>
      <p>How can possible trade-offs between measures be addressed from a local perspective, accounting for measures such as reforestation, novel opportunities for agricultural development given climate impacts elsewhere, renewable energy (including bioenergy production) and changes in diets?</p>
      <strong>Land-use for mitigation</strong>
      <ul class="question-3">
        <li><span>Converting land with fertile soils into solar fields is considered a waste of soil. <strong>Soil quality</strong> should be leading in this decision. The same holds for reforestation; soil quality should enable tree growing and not the other way around. </span></li>
        <li><span>Trade-offs between <strong>buy-out or subsidising</strong> mitigation.</span></li>
      </ul>
    </IntersectionObserver>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ChartPathway from '~/components/Chart-Pathway'
import ChartTime from '~/components/Chart-Time'
import IntersectionObserver from 'library/src/components/IntersectionObserver'

export default {
  components: {
    ChartPathway,
    ChartTime,
    IntersectionObserver
  },
  methods: {
    ...mapActions('step', [
      'setStep'
    ]),
    ...mapActions('path', [
      'setLoop'
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

  .list-interactive {
    margin-bottom: 1rem;

    li {
      text-decoration: underline;
      text-decoration-style: dotted;
      text-decoration-color: $color-neon;

      &:hover {
        text-decoration-style: solid;
      }
    }
  }

  .grasslands {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    margin-bottom: 0.5rem;
  }

  img, video {
    width: 100%;
  }

  .graphic {
    margin: $gap-v-step / 2 0;

    header {
      margin: 0;
    }
  }

  // h5 {
  //   margin-top: 0.5rem;
  // }

  .question {
    @include box();
  }

  .question ul {
    margin-top: 0.5rem;

    li span {
      display: inline;
    }

    &.question-1 li span {
      background: linear-gradient(to top, rgba($color-red, 0.2) 5px, transparent 6px);
    }

    &.question-2 li span {
      background: linear-gradient(to top, rgba($color-green, 0.2) 5px, transparent 6px);
    }

    &.question-3 li span {
      background: linear-gradient(to top, rgba($color-blue, 0.2) 5px, transparent 6px);
    }
  }

</style>
