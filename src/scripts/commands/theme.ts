import { Command, CommandResponse } from "../command";
import { CommandInterface } from "../parser";

export class Theme implements Command {
    constructor(public command:CommandInterface){}

    name = "theme";
    description = 'Change the theme of the terminal';

    argumentDescription = [
        {
            key: "theme",
            keyDescription: "The theme to change to"
        }
    ];

    async changeTheme(theme: string) : Promise<CommandResponse> {
        const linkElement = document.getElementsByTagName('link');
        const link = linkElement[1];
        link.setAttribute('href', `css/${theme}.css`);
        //reload window
        window.location.reload();
        return {
            command: this.command.command,
            returnValue: {type: 'success', furtherDetails: 'Theme changed'},
            output: 'Theme changed to ' + theme,
            fullCommand: this.command.fullCommand
        }
    }

    async execute(): Promise<CommandResponse> {
        if(this.command.arguments?.length === 0 || !this.command.arguments){
            return {
                command: this.command.command,
                returnValue: {type: 'error', furtherDetails: 'No theme specified'},
                output: 'Available themes: \n vue-neu, flamingo and glass',
                fullCommand: this.command.fullCommand
            }
        } else {
            const argument = this.command.arguments[0].toLowerCase();

            switch (argument) {
                case 'vue-neu':
                    return this.changeTheme('vue-neu');
                case 'flamingo':
                    return this.changeTheme('flamingo');
                case 'glass':
                    return this.changeTheme('glass');
                default:
                    return {
                        command: this.command.command,
                        returnValue: {type: 'error', furtherDetails: 'Invalid theme'},
                        output: 'Available themes: \n vue-neu, flamingo and glass',
                        fullCommand: this.command.fullCommand
                    }
            }      
        }
    }
}