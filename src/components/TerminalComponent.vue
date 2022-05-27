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
  //@import "@/styles"

  
</style>