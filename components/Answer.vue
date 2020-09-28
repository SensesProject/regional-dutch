<template>
  <li class="answer">
    <span class="label"><slot /></span>
    <button class="link">Database <i>↗</i></button>
  </li>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .answer {
    // margin-left: 1vw;
    margin-bottom: 1vh;
    counter-increment: counter;
    position: relative;
    color: $color-deep-gray;
    transition: border-color 0.3s, color 0.3s;
    border: 1px solid getColor(gray, 90);
    border-radius: 5px;
    // padding: 1vh 2vw;
    display: grid;
    grid-template-columns: 1fr auto;

    .label {
      padding: 1vh 1vw;
    }

    .link {
      transition: background-color 0.3s;
      background-color: #fff;
      color: #fff;
      border: 0;
      padding: 1vh 2vw;
      border-radius: 0 4px 4px 0;
    }

    &:hover {
      border-color: getColor(neon, 50);
      color: $color-black;

      .link {
        background-color: getColor(neon, 50);
      }
    }

    // &::before {
    //   content: counter(counter) ". ";
    //   font-size: 0.7em;
    //   color: getColor(gray, 50);
    //   font-weight: $font-weight-regular;
    //   position: absolute;
    //   left: 0;
    //   height: 100%;
    //   line-height: 1.5rem;
    // }
  }

</style>
