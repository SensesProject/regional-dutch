<template>
  <div class="container">
    <section class="step">
      <header>
        <h2>Steps for developing robust pathways across scenarios and scales</h2>
      </header>
      <p>We developed a robust pathway towards the multi-scale vision participatorily, and tested its robustness across scenarios (Step 1) and scales (Step 2).</p>
    </section>
    <section class="step">
      <IntersectionObserver :step="0" :noStyling="true">
        <h3>Step 1</h3>
        <p>We used a back-casting method [hyperlink] to develop actions to reach the multi-scale vision. To increase robustness of the pathway, we ‘stress tested’ it with wildcards, based on the four shared socioeconomic pathways (ssp source) and results from two climate impact models (IMAGE and MAgPIE). Note that robust refers to robustness across scenarios that represent a broad socioeconomic context, associated worldviews (Simona paper) and robustness across climate scenarios that represent a broad climatic context (source). The discussion and pathway reveals opportunities, in the form of synergies between themes and challenges, in the form of trade-offs between four focus themes.</p>
        <p>Wildcards are useful to test the robustness of pathways across scenarios. Concrete examples of questions could be:</p>
        <ol>
          <li class="link clickable" @click="() => scrollTo('ssp1-wildcard')">Question for SSP1-wildcard: International supply chains and links to local production</li>
          <li class="link clickable" @click="() => scrollTo('ssp3-wildcard')">Question for SSP3-wildcard: Security, international instability, migration fluxes</li>
          <li class="link clickable" @click="() => scrollTo('ssp4-wildcard')">Question for SSP4-wildcard: Dependence on centralised green-energy systems</li>
          <li class="link clickable" @click="() => scrollTo('ssp5-wildcard')">Question for SSP5-wildcard: Interconnection of international IT-infrastructure</li>
        </ol>
      </IntersectionObserver>
    </section>
    <ChartWildcards />
    <section class="steps layout--left">
      <h4>Wildcards</h4>
      <IntersectionObserver :step="1" :noStyling="true" classes="wildcard" id="ssp1-wildcard">
        <figure class="image">
          <i class="e">🐔</i>
        </figure>
        <main class="content">
          <header>
            <span class="caption">Wildcard SSP1 “Sustainability”</span>
            <h2>Chicken epidemics</h2>
          </header>
          <h3>Event sketch</h3>
          <p>On a sunny Sunday morning in Overijssel, Sanne gets up to feed her chickens, as always. As soon as she arrives at the chicken coop there is no movement. All chickens are dead. She looks at the fence or maybe a marten has come through. "Oh," she thinks, "That is how nature works, they must have been eaten." Unsuspectingly, she goes to visit the neighbour. All the chickens are dead there too. "Quite strange". After having made a tour through the living commune, the chickens are found dead everywhere. Also, with her sister, who lives in a residential group in Zeeland, all the chickens are dead.</p>
          <h3>Impacts</h3>
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
          <h3>Event sketch</h3>
          <p>Kirsten follows the news with interest. Her bed & breakfast in Overijssel is fully booked and all the extra beds that she could find are crammed into the rooms. The minister has just indicated that the Randstad will be evacuated. "And now those Randstatters want to go this way," she thinks, slightly frustrated. "They also benefit from our windmills".</p>
          <p>A few hours ago, the volcano erupted on one of the Canary Islands. This causes a huge tidal wave that is coming towards the Dutch coast. All new dike reinforcement projects in recent years are not designed for a tidal wave. After hours of tension, the advice is therefore given to evacuate the Randstad as much as possible and to regard the Randstad as lost.</p>
          <h3>Impacts</h3>
          <p>Overijssel is faced with a huge population increase. This makes land scarce and the housing market exploded. Refugees from the Randstad try to fight for a place with their few possessions.</p>
        </main>
      </IntersectionObserver>
      <IntersectionObserver :step="4" :noStyling="true" classes="wildcard" id="ssp4-wildcard">
        <figure class="image">
          <i class="e">💨</i>
        </figure>
        <main class="content">
          <header>
            <span class="caption">Wildcard “Inequality” SSP4</span>
            <h2>The week with no wind</h2>
          </header>
          <h3>Event sketch</h3>
          <p>Jan puts his hand out of the window, "he still has no wind" he tells his son Piet. The weather has been totally silent for a week. The Netherlands is in the eye of a large hurricane that is slowly weakening but not displaced. It feels sultry in Overijssel and the mosquitoes cannot be hardened. "I hope we will get the fridge back from the municipality soon."</p>
          <h3>Impacts</h3>
          <p>In this world, energy generation is mainly regulated from wind energy from Overijssel. The large green companies are in control of the energy supply and distribution. The power is phased out in phases. Jan is in welfare, and because he is not working for his energy, the first austerity measures are applied to this group of people. The fridges and other steam eaters have already been collected. The large companies that keep the Netherlands stable and move the economy forward have the latest rights to energy, "Otherwise the Dutch economy collapses".</p>
        </main>
      </IntersectionObserver>
      <IntersectionObserver :step="5" :noStyling="true" classes="wildcard" class="ssp5-wildcard">
        <figure class="image">
          <i class="e">☹️</i>
        </figure>
        <main class="content">
          <header>
            <span class="caption">Wildcard “Fossil Fuel” SSP5</span>
            <h2>Google stopped working</h2>
          </header>
          <h3>Event sketch</h3>
          <p>Lisa is on her way to a meeting in her self-driving car. "I should have gone to sleep a bit earlier," she thinks, while slightly indulging in the car. Suddenly she suddenly sees a car shooting to the left in front of her. Less than a second later, her navigation system makes a loud beep and it drops out.</p>
          <h3>Impacts</h3>
          <p>Many systems depend on Google. The shutdown of Google causes chaos on the roads and public transport. Supermarket doors no longer work and people can only reach each other over the telephone, "but then again, who still has call minutes if everything can be done via Google".</p>
          <p>Paying via Google-pay no longer works, luckily there are people who arrange their payments through other apps.</p>
        </main>
      </IntersectionObserver>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ChartWildcards from '~/components/Chart-Wildcards'
import IntersectionObserver from 'library/src/components/IntersectionObserver'

export default {
  components: {
    ChartWildcards,
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

  .steps {
    display: grid;
    grid-row-gap: $gap-v-step;

    .wildcard {
      @include box();

      & > * {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 1rem;

        .content {
          grid-column-start: 2;
          grid-column-end: 4;
        }
      }

      figure {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 10vw;

        i.e {
          font-style: normal;
          font-size: 3rem;
        }
      }
    }
  }

</style>
