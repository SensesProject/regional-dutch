<template>
  <div class="container">
    <section class="step">
      <header>
        <span class="caption">Part 3</span>
        <h2>Robust pathways</h2>
      </header>
      <p>The third and last part of this module explains how we developed pathways to achieve the multiscale vision for the Overijsselse Vecht by linking top-down information from socioeconomic and climate change impact scenarios with bottom-up knowledge. We used two co-production techniques, including <a href="https://climatescenarios.org/finder/techniques/?name=backcasting%20/%20normative%20forecasting" target="_blank">back-casting</a> and <a href="https://climatescenarios.org/finder/techniques/?name=wild%20cards" target="_blank">wildcards</a>. The pathways were co-produced during two stakeholder workshops in 2019. The base of the pathways are the four vision themes ((1) land use & agriculture, (2) climate & energy, (3) socioeconomic development and (4) nature), derived from the multi-scale vision in Part 2.</p>
      <p>The robust pathways development process consists of two steps:</p>
      <p>In Step 1 we show how we co-produced a pathway and enhanced its robustness across socio-economic scenarios. In Step 2 we re-iterate the pathways by testing them across (global) climate impact scenarios to strengthen robustness across climate and socioeconomic impacts.</p>
    </section>
    <ChartPathway id="pathway-1" />
    <section class="step">
      <IntersectionObserver :step="0" :noStyling="true">
        <header>
          <span class="caption caption--2">Step 1</span>
          <h3>Robustness across socioeconomic scenarios</h3>
        </header>
        <p>During the first workshop, we presented the multiscale vision to stakeholders to guide the identification of actions to develop a pathway aimed at achieving the multiscale vision for 2050. This pathway has been tested for its robustness across a regional interpretation of the <a href="https://climatescenarios.org/primer/socioeconomic-development" target="_blank"><strong>S</strong>hared <strong>S</strong>ocioeconomic <strong>P</strong>athways</a> to capture unexpected events that could happen under future and broad socioeconomic developments. The rationale behind the use of socioeconomic scenarios is that it is well known that the severity of climate impacts and capacity to adapt and mitigate is strongly affected by the socioeconomic circumstances. Therefore, we applied the concept of <a href="https://climatescenarios.org/finder/techniques/?name=wild%20cards" target="_blank">wildcards</a> defined as low-probability, high-impact events to four regional interpretations of SSPs (1, 3, 4 and 5) that represent different broad challenges to adaptation and mitigation.</p>
        <h4>Wildcards</h4>
        <p>The use of SSP-based wildcards raises issues and questions usually not considered in a narrow local perspective and stimulated out-of-the box thinking to strengthen the future pathways. The wildcards were developed by the research team to facilitate SSP scenario thinking during the workshop.</p>
        <p>Concrete examples of questions derived from presenting the wildcards include:</p>
        <ol class="anchor-list">
          <li class="link clickable" @click="() => scrollTo('ssp1-wildcard')">SSP1: How are international supply chains linked to local production?</li>
          <li class="link clickable" @click="() => scrollTo('ssp3-wildcard')">SSP3: What are the regional implications for a population increase due to migrate fluxes?</li>
          <li class="link clickable" @click="() => scrollTo('ssp4-wildcard')">SSP4: How large is the dependence on centralised green-energy systems?</li>
          <li class="link clickable" @click="() => scrollTo('ssp5-wildcard')">SSP5: What is the interconnection of international IT-infrastructure and local IT-infrastructure?</li>
        </ol>
      </IntersectionObserver>
    </section>
    <ChartWildcards />
    <section class="layout--left wildcards">
      <div class="steps">
        <IntersectionObserver :step="1" :noStyling="true" classes="wildcard" id="ssp1-wildcard">
          <figure class="image">
            <i class="e">🐔</i>
          </figure>
          <main class="content">
            <header>
              <span class="caption">Wildcard SSP1 “Sustainability”</span>
              <h2>Chicken epidemics</h2>
            </header>
            <h4>Event sketch</h4>
            <p>On a sunny Sunday morning in Overijssel, Sanne gets up to feed her chickens, as she always does. When she arrives at the chicken coop, there is no movement. All chickens are dead. She looks at the fence to see if a marten may came through. "Oh," she thinks, "That is unfortunately how nature works, they must have been eaten." Unsuspectingly, she goes to visit the neighbour. All the chickens are dead there too. "Quite strange". After having made a tour through the living commune, the chickens are found dead everywhere. Also, with her sister, who lives in a residential group in Zeeland, all the chickens are dead.</p>
            <h4>Impacts</h4>
            <p>Most people depend on their own (or in small groups) garden and animals for daily food supplies. The food supply is vulnerable because of the ban on pesticides. The death of the chickens is the first wave, after which it is discovered that crops will no longer generate a harvest.</p>
            <p>Most households count on their own food supply. The strong bond in neighbourhoods has led to joint production. After one day all supplies are exhausted and people are forced to look outside their area to get food.</p>
          </main>
        </IntersectionObserver>
        <IntersectionObserver :step="3" :noStyling="true" classes="wildcard" id="ssp3-wildcard">
          <figure class="image">
            <i class="e">🌋</i>
          </figure>
          <main class="content">
            <header>
              <span class="caption">Wildcard SSP3 “Regional Rivalry”</span>
              <h2>Canary Islands volcano eruption</h2>
            </header>
            <h4>Event sketch</h4>
            <p>Kirsten follows the news with interest. Her bed & breakfast in Overijssel is fully booked and all the extra beds that she could find are crammed into the rooms. The minister has just indicated that the Randstad will be evacuated. "Now those Randstatters want to come this way," she thinks, slightly frustrated. "They also benefit from our windmills".</p>
            <p>A few hours ago, the volcano erupted on one of the Canary Islands. This causes a huge tidal wave that is coming towards the Dutch coast. All new dike reinforcement projects in recent years are not designed for a tidal wave. After hours of tension, the advice is therefore given to evacuate the Randstad as much as possible and to regard the Randstad as lost.</p>
            <h4>Impacts</h4>
            <p>Overijssel is faced with a huge population increase. This makes land scarce and the housing market exploded. Refugees from the Randstad try to fight for a place with their few possessions.</p>
          </main>
        </IntersectionObserver>
        <IntersectionObserver :step="4" :noStyling="true" classes="wildcard" id="ssp4-wildcard">
          <figure class="image">
            <i class="e">🌬️</i>
          </figure>
          <main class="content">
            <header>
              <span class="caption">Wildcard “Inequality” SSP4</span>
              <h2>The week with no wind</h2>
            </header>
            <h4>Event sketch</h4>
            <p>Jan puts his hand out of the window, "still no wind" he tells his son Piet. The weather has been totally silent for a week. The Netherlands is in the eye of a large hurricane that is slowly weakening but not displaced. It feels sultry in Overijssel and the mosquitoes cannot be hardened. "I hope we will get the fridge back from the municipality soon."</p>
            <h4>Impacts</h4>
            <p>In this world, energy generation is mainly regulated from wind energy from Overijssel. The large green companies are in control of the energy supply and distribution. The power is phased out. Jan is in welfare, and because he is not working for his energy, the first austerity measures are applied to this group of people. The fridges and other large power users have already been collected. The large companies that keep the Netherlands stable and move the economy forward have the latest rights to energy, "Otherwise the Dutch economy collapses".</p>
          </main>
        </IntersectionObserver>
        <IntersectionObserver :step="5" :noStyling="true" classes="wildcard" id="ssp5-wildcard">
          <figure class="image">
            <i class="e">😱</i>
          </figure>
          <main class="content">
            <header>
              <span class="caption">Wildcard “Fossil Fuel” SSP5</span>
              <h2>Google stopped working</h2>
            </header>
            <h4>Event sketch</h4>
            <p>Lisa is on her way to a meeting in her self-driving car. "I should have gone to sleep a bit earlier," she thinks, while slightly indulging in the car. Suddenly she suddenly sees a car shooting to the left in front of her. Less than a second later, her navigation system makes a loud beep and it drops out.</p>
            <h4>Impacts</h4>
            <p>Many systems depend on Google. The shutdown of Google causes chaos on the roads and public transport. Supermarket doors no longer work and people can only reach each other over the telephone, "but then again, who still has call minutes if everything can be done via Google".</p>
            <p>Paying via Google-pay no longer works, luckily there are people who arrange their payments through other apps.</p>
          </main>
        </IntersectionObserver>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ChartWildcards from '~/components/Chart-Wildcards'
import ChartPathway from '~/components/Chart-Pathway'
import IntersectionObserver from 'library/src/components/IntersectionObserver'

export default {
  components: {
    ChartWildcards,
    ChartPathway,
    IntersectionObserver
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
    ]),
    scrollTo (id) {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }
  },
  mounted () {
    this.$on('step', (step) => {
      this.setStep(step)
    })
  }
}
</script>

<style lang="scss">
  @import "~@/assets/style/global";

  #pathway-1 {
    display: flex;
    align-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .wildcards {
    header {
      margin-bottom: $gap-v-step / 4;
    }

    .steps {
      display: grid;
      grid-row-gap: $gap-v-step;

      .wildcard {
        @include box();

        & > * {
          display: grid;

          @include query($narrow) {
            grid-template-columns: repeat(3, 1fr);
            grid-column-gap: 1rem;

            .content {
              grid-column-start: 2;
              grid-column-end: 4;
            }
          }
        }

        figure {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 10vw;
          margin: 2rem 0;

          i.e {
            font-style: normal;
            font-size: 3rem;
          }
        }
      }
    }
  }

  .anchor-list {
    list-style: none;

    li {
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
      position: relative;
      transition: color 0.3s;

      &:hover {
        color: $color-neon;
      }

      &:before {
        content: "↓";
        color: $color-neon;
        position: absolute;
        left: 0;
      }
    }
  }

</style>
