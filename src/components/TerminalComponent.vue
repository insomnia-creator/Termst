<template>
  <body>
    <TerminalWindowComponent @command="handleCommand($event)"></TerminalWindowComponent>
  </body>
</template>

<script lang="ts">
import TerminalWindowComponent from "@/components/TerminalWindowComponent.vue";

export default {
  name: "TerminalComponent",
  components: {TerminalWindowComponent},

};


</script>

<style lang="sass">
  @import "@/styles"

  body
    display: grid
    place-items: center
    height: 100vh
    width: 100vw
    @include TerminalComponentStyling()

</style>