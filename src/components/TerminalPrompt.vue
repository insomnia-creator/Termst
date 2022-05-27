<template>
  <div class="prompt"
       v-bind:style="$props.colour">{{PROMPT}}</div>
</template>

<script lang="ts">
export default {
  name: "TerminalPrompt",
  data(){
    return {
      PROMPT: `> `
    }
  },
  props: {
    colour: String,
  }
}
</script>

<style lang="sass">
  //@import "@/styles"
 

</style>