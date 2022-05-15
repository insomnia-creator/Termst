import { Command, CommandResponse } from "../command";
import { CommandInterface } from "../parser";

export class Time implements Command {
    constructor(public command:CommandInterface) {}
    
    name = "time";
    description = 'Shows the time';

    getTime(){
        //format date and display it as a string
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return `${hours}:${minutes}:${seconds}`;
    }

    async execute(): Promise<CommandResponse>
    {
        return {
            output: this.getTime(),
            fullCommand: this.command.fullCommand,
            returnValue: {
                type: "success",
                furtherDetails: 'time command'
            },
            command: this.command.command
        }
    }
}