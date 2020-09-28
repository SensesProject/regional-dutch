<template>
  <figure class="graphic" :style="styling" :class="{ isLoaded }">
    <svg viewBox="0 0 1260 1005" ref="vis" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker v-for="orient in ['90', '0', '270']" :id="`arrow-${orient}`" markerWidth="16" markerHeight="16" refX="8" refY="8" markerUnits="userSpaceOnUse" :orient="orient">
          <path class="marker" d="M0, 1 L8, 9 L16, 1" />
        </marker>
      </defs>

      <g :class="isHighlight('title')">
        <path class="path" d="M630,122 L630,172" marker-end="url(#arrow-0)" />
        <path class="path" d="M630,348 L630,497" marker-end="url(#arrow-0)" />
        <path class="path" d="M522,639 L522,733 L401,733" marker-end="url(#arrow-90)" />
        <path class="path" d="M738,639 L738,733 L859,733" marker-end="url(#arrow-270)" />
        <Box :x="630" :y="63" w="wide" h="tall" color="blue" :text="['Socioeconomics /', 'climate scenarios']" font="big" link="https://climatescenarios.org/primer/socioeconomic-development" />
        <Box :x="630" :y="570" w="wide" h="tall" color="blue" :text="['Climate impact', 'scenarios']" font="big" link="https://climatescenarios.org/primer/climate-impacts" />
      </g>

      <g :class="isHighlight('left')">
        <Label :x="360" :y="274" class="text text--alt" text-anchor="middle" text="No" link="https://climatescenarios.org/primer/adaptation" />
        <path class="path" d="M480,290 L200,290 L200,950 L460,950" marker-end="url(#arrow-270)" />

        <BoxGroup :x="200" :y="582" color="blue" :head="['Morphological analysis/', 'intuitive logic']" :text="['Narratives and cartoons']" link="https://climatescenarios.org/finder/techniques/?name=MORPHOLOGICAL%20ANALYSIS" />
        <BoxGroup :x="200" :y="731" color="blue" :head="['SWOT analysis']" :text="['Risk Assessment']" link="https://climatescenarios.org/finder/techniques/?name=SWOT%20ANALYSIS" />
      </g>

      <g :class="isHighlight(['left', 'brainstorming'])">
        <BoxGroup :x="200" :y="434" color="green" :head="['Brainstorming']" :text="['Nested scenarios']" link="https://climatescenarios.org/finder/techniques/?name=BRAINSTORMING" />
      </g>

      <g :class="isHighlight('right')">
        <Label :x="890" :y="274" class="text text--alt" text-anchor="middle" text="Yes" link="https://climatescenarios.org/primer/adaptation" />
        <path class="path" d="M780,290 L1060,290 L1060,950 L800,950" marker-end="url(#arrow-90)" />

        <BoxGroup :x="1060" :y="434" color="green" :head="['Visioning']" :text="['Vision']" link="https://climatescenarios.org/finder/techniques/?name=VISIONING" />
        <BoxGroup :x="1060" :y="731" color="green" :head="['Participatory systems', 'dynamics']" :text="['Transformative pathways ']" link="https://climatescenarios.org/finder/techniques/?name=PARTICIPATORY%20SYSTEMS" />
      </g>

      <g :class="isHighlight(['right', 'backcasting'])">
        <BoxGroup :x="1060" :y="582" color="green" :head="['Backcasting']" :text="['Pathways']" link="https://climatescenarios.org/finder/techniques/?name=BACKCASTING" />
      </g>

      <g :class="isHighlight('questions')">
        <Box :x="539.5" :y="217" h="default" w="narrow" color="white" :text="['exploratory']" link="https://climatescenarios.org/primer/adaptation" />
        <Box :x="720.5" :y="217" h="default" w="narrow" color="white" :text="['normative']" link="https://climatescenarios.org/primer/adaptation" />
      </g>

      <g :class="{ isHighlight: highlights.length === 0 }">
        <Box :x="630" :y="949" w="whide" h="tall" color="green" :text="['Adaptation', 'scenarios']" font="big" link="https://climatescenarios.org/primer/adaptation" />
        <Box :x="630" :y="873" w="default" h="default" color="white" :text="['Robust Decision Making', '(trade-offs and robustness)']" link="https://climatescenarios.org/finder/techniques/?name=ROBUST%20DECISIONMAKING" />

        <text :y="290" class="text text--alt" text-anchor="middle">
          <tspan x="630">Does other knowledge</tspan>
          <tspan x="630" dy="30">already exist?</tspan>
        </text>
      </g>

      <!-- <Box :x="200" :y="500" w="default" h="default" color="white" :text="['Brainstorming']" font="small" />
      <Box :x="200" :y="559" w="narrow" h="default" color="green" :text="['Nested scenarios']" /> -->
      <g class="isHighlight">
        <Dot :x="370" :y="396" v-if="points.includes('brainstorming')" key="brainstorming" label="Brainstorming is a creative thinking, participatory and interactive technique used in face-to-face and online group working sessions to generate new ideas around a specific area of interest. Aiming at removing inhibitions and breaking out of narrow and routine discussions, it allows people to think more freely and move into new areas of thought, and to propose new solutions to problems. Brainstorming is usually used in combination with other co-production techniques and futures methods (i.e. scenarios, backcasting, morphological and structural analysis, cognitive mapping, etc.)." />
        <Dot :x="370" :y="544" v-if="points.includes('morphological')" key="morphological" label="Morphological analysis (MA) investigates the totality of relationships contained in multi-dimensional, non-quantifiable problem complexes. The approach begins by identifying and defining the parameters (or dimensions) of the problem complex to be investigated, and assigning each parameter a range of relevant “values” or conditions. Identifying the parameters (dimensions/drivers) and assigning values (conditions/states) can both be done through participatory processes together with stakeholders. A morphological box is constructed by setting the parameters against each other in an n-dimensional matrix. It is a fundamental scientific method of alternating between analysis and synthesis." />
        <Dot :x="370" :y="694" v-if="points.includes('swot')" key="swot" label="SWOT is an assessment tool that lists the Strengths, Weaknesses, Opportunities, and Threats of a project, partnership, or product. It helps to distinguish between factors that can and can’t be influenced. SWOT is often presented in a 2×2 matrix, an overview of significant internal and external factors influencing strategies or possible futures. SWOT analysis is widely used, especially as a preliminary step in planning. The method may also be used in workshops involving a wide range of participants, and in combination with other future-oriented techniques." />
        <Dot :x="441" :y="177" v-if="points.includes('what-should')" key="what-should" label="<h4>What should happen?</h4><ul><li>In many cases, e.g. in quantitative scenario applications on the national to global scale, scenarios that address what should happen are referred to as ‘goal-oriented scenarios’ or pathways.</li><li>In other, more often regional, scenario applications, the common term is ‘normative scenario’. At regional level there is a clear and strong dichotomy between exploring what can happen and designing what should happen, mostly reinforced by a difference in scale with normative scenarios being developed for smaller regions and shorter time horizons, also building on different methods and tools. The explorative scenarios are built for opening the imagination amongst stakeholders on what can happen, while the normative scenarios are generally built after the explorative ones in order to cope with challenges. For both quantitative (model-based) and qualitative scenario approaches, both normative and explorative scenarios can be developed with the same (modelling) tools or using translating techniques to link qualitative and quantitative scenarios.</li></ul>" />
        <Dot :x="820" :y="177" v-if="points.includes('what-could')" key="what-could" label="<h4>What could happen?</h4><ul><li>For quantitative model-based scenario approaches, often deployed on the national to global scale, the term ‘projection’ is frequently used to refer to scenarios that address what can happen, for example in ‘climate impact projections’ or ‘baseline projections’. We suggest using this term in instances, where the quantitative part dominates the scenario content, even if underpinned by a secondary narrative element.</li><li>For regional scenario approaches, the term ‘explorative scenario’ is commonly used. Here the term ‘projection’ is restricted to model-based, quantitative elements of explorative scenarios which are based on the qualitative narrative elements at their core.</li></ul>" />
        <Dot :x="1229" :y="545" v-if="points.includes('backcasting')" key="backcasting" label="Backcasting is normative approach which works backwards from a particular desired endpoint (goal/vision) to the present in order to determine the feasibility of that future and what policy measures and actions would be required to reach that point. Backcasting is not concerned with predicting the future; rather, it is a strategic problem-solving approach, in the quest for the answer to how to reach specified outcomes in the future." />
        <Dot :x="1229" :y="700" v-if="points.includes('participatory-system-dynamics')" key="participatory-system-dynamics" label="System dynamics (SD) is an approach to understanding the nonlinear behaviour of complex systems over time using stocks, flows, internal feedback loops, table functions and time delays. A System Dynamics application begins with the definition of a problem. It then draws in all major patterns of influence that together create the “system”. Different values for variables and different policy structures may then be introduced to simulate how the system would respond to different circumstances or initiatives." />
        <Dot :x="1229" :y="398" v-if="points.includes('visioning')" key="visioning" label="Visioning is the process of creating a series of images or visions of the future that are real and compelling enough to motivate and guide people toward focusing their efforts on achieving certain goals. The visioning process is almost always done in a participatory manner. The group of participants needs to include representation from key constituencies both inside and outside the organization or community. The meeting facilitator will need to set up the vision discussion by creating a good mental space for the sharing of values and aspirations." />
      </g>
    </svg>
  </figure>
</template>

<script>
import { mapState } from 'vuex'
import Dot from '~/components/Helper/Dot'
import Box from '~/components/Helper/Box'
import Label from '~/components/Helper/Label'
import BoxGroup from '~/components/Helper/BoxGroup'
import { isUndefined, isArray, isString, intersection } from 'lodash'

export default {
  components: {
    Dot,
    Box,
    Label,
    BoxGroup
  },
	data () {
    return {
      height: 0,
      isLoaded: true
    }
  },
  computed: {
    ...mapState('step', [
      'points',
      'highlights'
    ]),
    styling () {
      return { top: `calc(50% - ${this.height / 2}px)`, height: `${this.height}px` }
    }
  },
  mounted () {
    this.calcHeight()
    window.addEventListener('resize', this.calcHeight, false)
  },
	methods: {
    calcHeight () {
      const { vis: el } = this.$refs
      if (!isUndefined(el)) {
        this.height = el.clientHeight
      }
    },
    onLoad () {
      this.calcHeight()
      this.isLoaded = true
    },
    isHighlight (t) {
      let isHighlight = false
      if (isArray(t)) {
        isHighlight = (intersection(this.highlights, t)).length
      } else if (isString(t)) {
        isHighlight = this.highlights.includes(t)
      }
      return { isHighlight: isHighlight || this.highlights.length === 0 }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .graphic {
  	width: 100%;
  	height: auto;
  	position: sticky;
    display: block;
    text-align: center;
    opacity: 0;
    transition: opacity 1s;

    &.isLoaded {
      opacity: 1;
    }

    img {
      max-width: 100%;
      width: auto;
      height: auto;
      max-height: 90vh;
    }

    svg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: auto;

      & > g {
        opacity: 0.3;
        transition: opacity 0.5s;
      }

      .isHighlight {
        opacity: 1;
      }
    }
  }
</style>
