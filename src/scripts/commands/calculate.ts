import {Command, CommandResponse} from "@/scripts/command";
import {CommandInterface} from "@/scripts/parser";
import {evaluate} from "mathjs";


export class Calculate implements Command {
    public argumentDescription: { key: string; keyDescription: string }[] = [
        {
            keyDescription: "Calculation equation",
            key: "equation",
        }
    ]
    name = "calculate";
    description = "Calculate a mathematical equation";

    calculate(equation: string){
        let res;
        try {
            res = evaluate(equation);
        } catch {
            res = 'Incorrect equation or an error occurred';
        }
        return res;
    }


    constructor(public command: CommandInterface) {
    }

    async execute(): Promise<CommandResponse> {
        let output: string;
        if(this.command.argumentsAsString){
            output = this.calculate(this.command.argumentsAsString);
        } else {
            output = "No equation provided";
        }

        return {
            command: this.command.command,
            returnValue: {type: 'success', furtherDetails: 'The command ran with perfection!'},
            output: output,
            fullCommand: this.command.fullCommand
        }
    }
}