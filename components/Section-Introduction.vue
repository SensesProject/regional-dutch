<template>
  <div class="container">
    <section id="introduction" class="step step--wider">
      <header>
        <h1>Dutch case study page</h1>
      </header>
      <p>Transformative pathways for the Dutch Overijsselse Vecht region</p>
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
