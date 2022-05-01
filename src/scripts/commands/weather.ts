import {Command, CommandResponse} from "@/scripts/command";
import {CommandInterface} from "@/scripts/parser";

export class Weather implements Command {
    public argumentDescription = [
        {
            key: "city",
            keyDescription: "City to look for the report, you don't need to pass in this parameter necessarily."
        }
    ];
    public description = 'Fetch your weather report, from wttr.in of course.'
    public name = 'weather'
    constructor(public command:CommandInterface) {}

    async execute(): Promise<CommandResponse> {

        return new Promise( (resolve, reject) => {
            const url = this.command.argumentsAsString ? `https://wttr.in/${this.command.argumentsAsString}?0n` : `https://wttr.in?0n`;
            fetch(url).then(res => res.text().then(body => {
                resolve({
                    command: this.command.command,
                    returnValue: {type: 'success', furtherDetails: "Got your weather!"},
                    output: body,
                    showAsRawHTML: true,
                    additionalStyling: `margin: 0px !important;`,
                    fullCommand: this.command.fullCommand
                })
            })).catch(e => {
                reject({
                    command: this.command.command,
                    returnValue: {type: 'error', furtherDetails: "Something went wrong!"},
                    output: e.message
                });
            });
        })
    }


}