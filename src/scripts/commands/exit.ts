import {Command, CommandResponse} from "@/scripts/command";
import {CommandInterface} from "@/scripts/parser";

export class Exit implements Command {
    public description = 'Exit the terminal.'
    public name = 'exit'


    constructor(public command: CommandInterface) {
    }

    async execute(): Promise<CommandResponse> {
        window.close();
        return {
            command: this.command.command,
            returnValue: {type: 'success', furtherDetails: 'The command ran with perfection!'},
            output: 'Exited.',
            fullCommand: this.command.fullCommand
        }
    }
}