<template>
  <TerminalComponent></TerminalComponent>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TerminalComponent from "@/components/TerminalComponent.vue";

export default defineComponent({
  name: "App",
  components: { TerminalComponent },
});
</script>

<style lang="sass">
@import "styles"
#app
  background: $background
  color: $foreground
  height: 100vh
  width: 100vw
*
  margin: 0 !important
  font-family: $font-family
</style>
