<template>
  <li class="question-wrapper">
    <h3 class="question"><slot name="question" /></h3>
    <ol class="answers">
      <slot name="answers" />
    </ol>
  </li>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .question-wrapper {
    // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 4vh 0 8vh;
    padding: 0;

    .question {
      margin-bottom: 2vh;
    }

    .answers {
      list-style: none;
      counter-reset: counter;
    }
  }

</style>
