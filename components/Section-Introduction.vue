<template>
  <div class="container">
    <section id="introduction" class="step step--wider">
      <header>
        <h1>Co-producing robust adaptation pathways to address adaptation and mitigation to climate change</h1>
      </header>
      <p>The Dutch case study area, the Overijsselse Vecht, is an intensely managed area and has a long history of participatory management and cooperation between public and private sector stakeholders and scientists. The fields of interest in the Overijsselse Vecht include water management, (sustainable) agricultural development and climate change adaptation. For these reasons, the Dutch case study is an example of an <a href="https://climatescenarios.org/co-production/#dutch" target="_blank">information-rich context</a>. We link the local, bottom-up and empirical knowledge with top-down scientific input translated from global socioeconomic and climate impact scenarios, developed from the <a href="https://climatescenarios.org/primer/socioeconomic-development" target="_blank">Shared Socioeconomic Pathways</a> using co-production techniques with stakeholders. The aim is to develop pathways for a climate robust and CO₂-neutral Overijsselse Vecht, while linking climate adaptation and mitigation. In this page, adaptation scenarios are referred to as “pathways” because we design a “path” in coherent steps in time towards a sustainability goal that we call “vision”.</p>
      <p>In this page, we demonstrate in three interactive parts how the development adaptation pathways can benefit from the use of co-production techniques and global scenarios information For a full background of the case study we refer to the <a href="http://senses-project.org/results/" target="_blank">SENSES Deliverable</a>.</p>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  #introduction {
    grid-column-start: 1;
    grid-column-end: 6;
    margin: 5vh 0;

    @include query($medium) {
      grid-column-start: 2;
      grid-column-end: 5;
    }

    @include query($wide) {
      grid-column-start: 1;
      grid-column-end: 4;
    }
  }

</style>
