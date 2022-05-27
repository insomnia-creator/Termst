<template>
 <div class="terminal">
   <div class="terminal-output" v-for="(command, index) in executedCommands" v-bind:key="index">
      <TerminalOutput v-bind:cmd="command"></TerminalOutput>
   </div>
   <div class="terminal-input-group">
     <TerminalPrompt></TerminalPrompt>
     <TerminalInsertField @enter="onEnter($event)"></TerminalInsertField>
     <TerminalBlinkingCaret></TerminalBlinkingCaret>
   </div>
 </div>

</template>

<script lang="ts">
import TerminalPrompt from "@/components/TerminalPrompt.vue";
import TerminalInsertField from "@/components/TerminalInsertField.vue";
import TerminalBlinkingCaret from "@/components/TerminalBlinkingCaret.vue";
import {parse} from "@/scripts/parser";
import {defineComponent} from "vue";
import indexCommands from "@/scripts/commands/export";
import TerminalOutput from "./TerminalOutput.vue";
import { CommandResponse } from "@/scripts/command";


export default defineComponent({
  name: "TerminalWindowComponent",
  components: { TerminalBlinkingCaret, TerminalInsertField, TerminalPrompt, TerminalOutput },
  methods: {
    async onEnter(cmd: string){
      if(cmd.length <= 0) return;
      if(cmd.toLowerCase() === 'clear') return this.executedCommands = [];


      try {
        const cmnd = await parse(cmd);

        const command = await indexCommands(cmnd)


        const executed = await command.execute();
        this.executedCommands.push(executed);


      } catch (e) {
        console.log(e);
        this.executedCommands.push(e as CommandResponse);
      }

    },

  },
  data(){
    return {
      executedCommands: new Array<CommandResponse>()
    }
  }
});
</script>

<style scoped lang="sass">
// @import "@/styles"


</style>