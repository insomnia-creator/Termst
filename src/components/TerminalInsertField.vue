<template>
  <span autofocus tabindex="0"
        v-on:keydown="handleKeyboardDownEvent($event)" v-on:keyup.enter="emitInput()" ref="term_input"
        spellcheck="false" contenteditable="true" class="terminal-input"></span>
</template>

<script lang="ts">
import {defineComponent} from "vue";


export default defineComponent({
  name: "TerminalInsertField",
  data() {
    return {
      input_text: ''
    }
  },
  methods: {
    handleKeyboardDownEvent(event:KeyboardEvent){
      if(['ArrowUp',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight'].includes(event.key) || event.key === 'Enter'){
        event.preventDefault()
      }
      this.input_text = (this.$refs.term_input as HTMLSpanElement).innerHTML
    },
    emitInput(){
      this.$emit('enter', this.input_text);
      (this.$refs.term_input as HTMLSpanElement).innerHTML = '';
    },


  },
})
</script>

<style lang="sass">
  @import '@/styles'

  .terminal-input
    caret: transparent !important
    text-shadow: 0px 0px 0px $foreground
    color: rgba(0,0,0,0)
    overflow-x: scroll
    font-weight: bold
    @include TerminalInsertFieldStyling()
    &:focus
      outline: none
</style>