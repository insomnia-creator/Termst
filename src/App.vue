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
// @import "styles"

</style>
