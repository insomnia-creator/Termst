import {Command, CommandResponse} from "@/scripts/command";
import {CommandInterface} from "@/scripts/parser";
import {getHelpMessage} from "@/scripts/commands/export";
import {commands} from "@/scripts/commands/export";

export class Help implements Command {
  name = 'help';
  description = "Help Command"
  argumentDescription = [
      {
          key: "command",
          keyDescription: "Command to get help for."
      }
  ]


  constructor(public command:CommandInterface) {}


    getCommands(){
      console.log(commands);
      const commandNames: Array<string> = [];
      for(let i = 0; i < commands.length; i++) {
          commandNames.push(commands[i].name);
      }
      return commandNames;
    }


     async execute(): Promise<CommandResponse> {

      if(this.command.arguments?.length !== 0){
          const message =  getHelpMessage(this.command.argumentsAsString as string);
          return{
              command: this.command.command,
              fullCommand: this.command.fullCommand,
              returnValue: {
                  type: 'success',
                  furtherDetails: `Help command for ${this.command}`
              },
              output: message,
              showAsRawHTML: false
          }
      } else {
          let commandsString = `List of commands: \n`;
          const commandsArray = this.getCommands();
          console.log(commandsArray);
          commandsArray.forEach(cmd => {
            commandsString += `<span style="font-size: 20px"><em>${cmd}</em>\n</span>`;
          });

          return{
              command: this.command.command,
              fullCommand: this.command.fullCommand,
              returnValue: {
                  type: 'success',
                  furtherDetails: `List commands`
              },
              showAsRawHTML: true,
              output: commandsString,
          }
      }

  }

}