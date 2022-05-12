import {Command, CommandResponse} from "@/scripts/command";
import {CommandInterface} from "@/scripts/parser";

export class Template implements Command {
    public argumentDescription: { key: string; keyDescription: string }[] = [
        {
            keyDescription: "Template description",
            key: "key",
        }
    ]
    public flagDescription = [
        {
            keyDescription: "Flags",
            key: "-f"
        }
    ];
    public optionsDescription = [
        {
            keyDescription: "An option",
            key: "--option"
        }
    ];
    public description = 'Template.'
    public name = 'template'


    constructor(public command: CommandInterface) {
    }

    async execute(): Promise<CommandResponse> {
        return {
            command: this.command.command,
            returnValue: {type: 'success', furtherDetails: 'The command ran with perfection!'},
            output: 'Template',
            fullCommand: this.command.fullCommand
        }
    }
}