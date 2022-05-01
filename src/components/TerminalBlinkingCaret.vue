<template>
  <div class="blinking-caret"></div>
</template>

<script lang="ts">
export default {
  name: "TerminalBlinkingCaret"
}
</script>

<style scoped lang="sass">
  @import "@/styles"

  @keyframes blink
    0%
      opacity: 1
    50%
      opacity: 0
    100%
      opacity: 1

  .blinking-caret
    height: $font-size
    width: 10px
    background: $caret-colour
    animation: blink 1s infinite
    @include TerminalBlinkingCaretStyling()



  // 0% {
  //opacity: 1;
  //}
  //50% {
  //opacity: 0;
  //}
  //100% {
  //opacity: 1;
  //}

</style>