<template>
  <main class="page">
    <div class="container">
      <section id="introduction" class="step introduction">
        <header>
          <h1>Dutch case study page</h1>
        </header>
        <p>Transformative pathways for the Dutch Overijsselse Vecht region</p>
      </section>
      <section class="step">
        <header>
          <h2>System analysis</h2>
        </header>
        <p>Scoping interviews with stakeholders in the Dutch case study region have been analysed with Fuzzy Cognitive Maps (Kosko 1986, Kok 2009)  to conduct a system analysis of perceptions in the region. A total of 14 concepts and 4 drivers represent perceptual system understanding around the focus of the interviews: climate smart land use. Climate smart land use is defined as the optimal trade-off between adaptive and mitigative land use for the Vecht, or more concrete, the optimal trade-off between land use for agriculture, nature and energy. Click on the drivers to see how they influence climate smart land use directly or indirectly.</p>
      </section>
      <section class="graphic graphic--left">
        <ChartNetwork />
      </section>
      <section class="graphic graphic--right">
        <ChartDriver />
        <p>Together, the drivers enhance climate smart land use to the highest state. Yet, current agricultural practices decline which negatively influences the growth of the local economy.</p>
      </section>
      <section class="step">
        <header>
          <h2>Multi-scale vision</h2>
        </header>
        <p>In the Dutch case study area, multiple objectives across multiple scales exist in order to reach long-term targets. We adapted the quality criteria from Wiek and Iwaniek (2014) to address the inclusion of potential trade-offs across scales. To this end, Dutch policy documents and policy visions relevant for climate mitigation and adaptation targets were screened. We identified policy targets three scales: local (Vecht), regional (province of Overijssel), national (the Netherlands). We furthermore identified four cross-cutting themes: (1) land use and agriculture, (2) climate & energy, (3) socioeconomic development and (4) nature.</p>
      </section>
      <section class="graphic graphic--vision">
        <ChartVision />
      </section>
      <section class="step">
        <header>
          <h2>Robust pathway</h2>
        </header>
        <p>A robust pathway towards the multi-scale vision was developed during a stakeholder workshop. We used a back-casting method to develop actions to reach the multi-scale vision. To increase robustness of the pathway, we ‘stress tested’ it with wildcards, based on the four shared socioeconomic pathways (ssp source) and results from two climate impact models (IMAGE and MAgPIE). Note that robust refers to robustness across scenarios that represent a broad socioeconomic context, associated worldviews (Simona paper) and robustness across climate scenarios that represent a broad climatic context (source). The discussion and pathway reveals opportunities, in the form of synergies between themes and challenges, in the form of trade-offs between four focus themes.</p>
      </section>
      <section class="wildcards">
        <ChartWildcards :isSmall="false" />
        <section class="steps">
          <IntersectionObserver :step="1" :noStyling="true" classes="wildcard">
            <header>
              <span class="caption">Wildcard SSP1 “Sustainability”</span>
              <h2>Chicken epidemics</h2>
            </header>
            <h3>Event sketch</h3>
            <p>On a sunny Sunday morning in Overijssel, Sanne gets up to feed her chickens, as always. As soon as she arrives at the chicken coop there is no movement. All chickens are dead. She looks at the fence or maybe a marten has come through. "Oh," she thinks, "That is how nature works, they must have been eaten." Unsuspectingly, she goes to visit the neighbour. All the chickens are dead there too. "Quite strange". After having made a tour through the living commune, the chickens are found dead everywhere. Also, with her sister, who lives in a residential group in Zeeland, all the chickens are dead.</p>
            <h3>Impacts</h3>
            <p>Most people depend on their own (or in small groups) garden and animals for daily food supplies. The food supply is vulnerable because of the ban on pesticides. The death of the chickens is the first wave, after which it is discovered that crops will no longer generate a harvest.</p>
            <p>Most households count on their own food supply. The strong bond in neighbourhoods has led to joint production. After one day all supplies are exhausted and people are forced to look outside their area to get food.</p>
          </IntersectionObserver>
          <IntersectionObserver :step="3" :noStyling="true" classes="wildcard">
            <header>
              <span class="caption">Wildcard SSP3 “Regional Rivalry”</span>
              <h2>Canary Islands volcano eruption</h2>
            </header>
            <h3>Event sketch</h3>
            <p>Kirsten follows the news with interest. Her bed & breakfast in Overijssel is fully booked and all the extra beds that she could find are crammed into the rooms. The minister has just indicated that the Randstad will be evacuated. "And now those Randstatters want to go this way," she thinks, slightly frustrated. "They also benefit from our windmills".</p>
            <p>A few hours ago, the volcano erupted on one of the Canary Islands. This causes a huge tidal wave that is coming towards the Dutch coast. All new dike reinforcement projects in recent years are not designed for a tidal wave. After hours of tension, the advice is therefore given to evacuate the Randstad as much as possible and to regard the Randstad as lost.</p>
            <h3>Impacts</h3>
            <p>Overijssel is faced with a huge population increase. This makes land scarce and the housing market exploded. Refugees from the Randstad try to fight for a place with their few possessions.</p>
          </IntersectionObserver>
          <IntersectionObserver :step="4" :noStyling="true" classes="wildcard">
            <header>
              <span class="caption">Wildcard “Inequality” SSP4</span>
              <h2>The week with no wind</h2>
            </header>
            <h3>Event sketch</h3>
            <p>Jan puts his hand out of the window, "he still has no wind" he tells his son Piet. The weather has been totally silent for a week. The Netherlands is in the eye of a large hurricane that is slowly weakening but not displaced. It feels sultry in Overijssel and the mosquitoes cannot be hardened. "I hope we will get the fridge back from the municipality soon."</p>
            <h3>Impacts</h3>
            <p>In this world, energy generation is mainly regulated from wind energy from Overijssel. The large green companies are in control of the energy supply and distribution. The power is phased out in phases. Jan is in welfare, and because he is not working for his energy, the first austerity measures are applied to this group of people. The fridges and other steam eaters have already been collected. The large companies that keep the Netherlands stable and move the economy forward have the latest rights to energy, "Otherwise the Dutch economy collapses".</p>
          </IntersectionObserver>
          <IntersectionObserver :step="5" :noStyling="true" classes="wildcard">
            <header>
              <span class="caption">Wildcard “Fossil Fuel” SSP5</span>
              <h2>Google stopped working</h2>
            </header>
            <h3>Event sketch</h3>
            <p>Lisa is on her way to a meeting in her self-driving car. "I should have gone to sleep a bit earlier," she thinks, while slightly indulging in the car. Suddenly she suddenly sees a car shooting to the left in front of her. Less than a second later, her navigation system makes a loud beep and it drops out.</p>
            <h3>Impacts</h3>
            <p>Many systems depend on Google. The shutdown of Google causes chaos on the roads and public transport. Supermarket doors no longer work and people can only reach each other over the telephone, "but then again, who still has call minutes if everything can be done via Google".</p>
            <p>Paying via Google-pay no longer works, luckily there are people who arrange their payments through other apps.</p>
          </IntersectionObserver>
        </section>
      </section>
      <section class="step">
        <header>
          <h2>Robust across socioeconomic scenarios</h2>
        </header>
        <p>…</p>
      </section>
    </div>
  </main>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Question from '~/components/Question'
  import ChartDriver from '~/components/Chart-Driver2'
  import ChartNetwork from '~/components/Chart-Network'
  import ChartVision from '~/components/Chart-Vision'
  import ChartWildcards from '~/components/Chart-Wildcards'
  import Answer from '~/components/Answer'
  import Introduction from '~/components/Introduction'
  import Chart from '~/components/Chart'
  import IntersectionObserver from 'library/src/components/IntersectionObserver'

  export default {
    components: {
      Answer,
      Question,
      Introduction,
      Chart,
      IntersectionObserver,
      ChartDriver,
      ChartNetwork,
      ChartVision,
      ChartWildcards
    },
    computed: {
      ...mapState('step', [
        'step',
        'text'
      ])
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

  .page {
    @include center();
  }

  .container {
    width: 96vw;
    max-width: 1300px;
    min-height: 96vh;
    margin: 4vh 2vw;

    img {
      width: 100%;
    }

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 4rem;
    grid-column-gap: 4rem;

    .introduction {
      grid-column-start: 1;
      grid-column-end: 4;
      margin: 5vh 0;
    }

    .step {
      grid-column-start: 1;
      grid-column-end: 3;
    }

    .wildcards {
      grid-column-start: 1;
      grid-column-end: 6;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-column-gap: 4rem;
    }

    .steps {
      grid-column-start: 2;
      grid-column-end: 4;
      display: grid;
      grid-row-gap: 4rem;
    }

    .graphic {
      &.graphic--left {
        grid-column-start: 1;
        grid-column-end: 4;
      }

      &.graphic--right {
        grid-column-start: 4;
        grid-column-end: 6;
      }

      &.graphic--vision {
        grid-column-start: 3;
        grid-column-end: 6;
      }

      &.graphic--wildcards {
        // grid-row-start: 1;
        grid-column-start: 4;
        grid-column-end: 6;
        position: sticky;
        // top: 60px;
        display: block;
      }
    }

    .questionnaire {
      margin-top: 10vh;

      .questions {
        list-style: none;
      }
    }
  }
</style>
