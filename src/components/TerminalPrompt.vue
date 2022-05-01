<template>
  <div class="prompt"
       v-bind:style="$props.colour">{{PROMPT}}</div>
</template>

<script>
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
  @import "@/styles"
  .prompt
    color: #ff9f34
    font-weight: bold
    white-space: pre
    @include TerminalPromptStyling()



</style>