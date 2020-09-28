<template>
  <section class="questionnaire">
    <h2>Questionnaire</h2>
    <ul class="questions">
      <Question>
        <template v-slot:question>
          What do you need support with?
        </template>
        <template v-slot:answers>
          <Answer>method-mix / process / methodological framework</Answer>
          <Answer>technique / stand-alone tool</Answer>
        </template>
      </Question>
      <Question>
        <template v-slot:question>
          What is the scenario perspectives / aim / use?
        </template>
        <template v-slot:answers>
          <Answer>exploring what could happen</Answer>
          <Answer>exploring or framing what should happen</Answer>
          <Answer>exploring what could and should happen</Answer>
        </template>
      </Question>
      <Question>
        <template v-slot:question>
          For what stage of the project / study do you need a co-production method / technique? What is the objective of using the method / technique?
        </template>
        <template v-slot:answers>
          <Answer>scoping, framing a problem space /or framing the space of possibilities</Answer>
          <Answer>scenario development</Answer>
          <Answer>Developing action items / strategic plans</Answer>
        </template>
      </Question>
      <Question>
        <template v-slot:question>
          What kind of information do you want to collect / analyze?
        </template>
        <template v-slot:answers>
          <Answer>quantitative</Answer>
          <Answer>qualitative</Answer>
          <Answer>quantitative + qualitative / mixed method</Answer>
          <Answer>quantifying qualitative data</Answer>
        </template>
      </Question>
      <Question>
        <template v-slot:question>
          Do you need a method that allows integrating empirical data   with expert/stakeholder knowledge?
        </template>
        <template v-slot:answers>
          <Answer>yes</Answer>
          <Answer>no</Answer>
        </template>
      </Question>
      <Question>
        <template v-slot:question>
          How much ambiguity can you deal with in your project?
        </template>
        <template v-slot:answers>
          <Answer>can work with ambiguity</Answer>
          <Answer>cannot work with ambiguity</Answer>
        </template>
      </Question>
    </ul>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";


</style>
