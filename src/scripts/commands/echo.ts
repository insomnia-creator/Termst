import {Command, CommandResponse} from "@/scripts/command";
import {CommandInterface} from "@/scripts/parser";

export class Echo implements Command {
    public argumentDescription: { key: string; keyDescription: string }[] = [
        {
            keyDescription: "The message to echo",
            key: "message",
        }
    ]
    public description = 'Echo a message'
    public name = 'echo'
    constructor(public command:CommandInterface) {}

    async execute(): Promise<CommandResponse> {
        return {
            command: this.command.command,
            returnValue: {type: 'success', furtherDetails: 'The command ran with perfection!'},
            output: (this.command.argumentsAsString as string),
            fullCommand: this.command.fullCommand
        }
    }


}