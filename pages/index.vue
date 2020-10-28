<template>
  <main class="page">
    <SectionIntroduction />
    <SectionSystemAnalysis />
    <SectionMultiScaleVision />
    <SectionSteps />
    <SectionPathway />
    <SectionConclusion />
    <div class="container">
      <SensesMeta id="primer" />
    </div>
  </main>
</template>

<script>
  import SensesMeta from 'library/src/components/SensesMeta.vue'
  import SectionIntroduction from '~/components/Section-Introduction'
  import SectionSystemAnalysis from '~/components/Section-SystemAnalysis'
  import SectionMultiScaleVision from '~/components/Section-MultiScaleVision'
  import SectionPathway from '~/components/Section-Pathway'
  import SectionSteps from '~/components/Section-Steps'
  import SectionConclusion from '~/components/Section-Conclusion'

  export default {
    components: {
      IntersectionObserver,
      SensesMeta,
      SectionIntroduction,
      SectionSystemAnalysis,
      SectionMultiScaleVision,
      SectionPathway,
      SectionSteps,
      SectionConclusion
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/style/global";

</style>
