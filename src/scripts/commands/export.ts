import {Command, CommandResponse, Commands} from "@/scripts/command";
import {Echo} from "@/scripts/commands/echo";
import { CommandInterface } from "../parser";
import {Weather} from "@/scripts/commands/weather";
import {Search} from "@/scripts/commands/search";
const commands: Commands[] = [
    {
        name: 'echo',
        ifMatches: (command: CommandInterface) => {
            return new Echo(command);
        }
    },
    {
        name: 'weather',
        ifMatches: (command) => {
            return new Weather(command);
        }
    },
    {
        name: "search",
        ifMatches: (command => {
            return new Search(command);
        })
    }
];



export const indexCommands = (cmnd: CommandInterface): Promise<Command> => {
    
    return new Promise((resolve, reject) => {
        commands.forEach(command => {
            if (command.name === cmnd.command) {
                resolve(command.ifMatches(cmnd));
            }
        });

        const rejection:CommandResponse = {
            returnValue: {
                type: 'error',
                furtherDetails: 'Please re-check your command.'
            },
            command: cmnd.command,
            output: `Command does not exist.`,
            additionalClass: 'error',
            fullCommand: cmnd.fullCommand,
        }
        reject(rejection);

    })
}

