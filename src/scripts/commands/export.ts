import {Command, CommandResponse, Commands} from "@/scripts/command";
import {Echo} from "@/scripts/commands/echo";
import { CommandInterface } from "../parser";
import {Weather} from "@/scripts/commands/weather";
import {Search} from "@/scripts/commands/search";
import {Help} from "@/scripts/commands/help";
import {Exit} from "@/scripts/commands/exit";
import {Calculate} from "@/scripts/commands/calculate";
import { Time } from "@/scripts/commands/time";
import { DateCommand } from "@/scripts/commands/date";

export const commands: Commands[] = [
    {
        name: 'echo',
        ifMatches: (command: CommandInterface) => {
            return new Echo(command);
        },
        helpCommand: `Usage: 
        echo <message>`
    },
    {
        name: 'weather',
        ifMatches: (command) => {
            return new Weather(command);
        },
        helpCommand: `Usage:
        weather <city>`
    },
    {
        name: "search",
        ifMatches: (command => {
            return new Search(command);
        }),
        helpCommand: `search <query>
         
         Options: 
         --setengine=<engine> : Sets the default Search engine
         --engine=<engine> : Sets the search engine to use for this search
         
         Flags:
         
         -n : Open the result in a new tab`
    },
    {
        name: "help",
        ifMatches: (command) => {
            return new Help(command)
        },
        helpCommand: `Help???`
    },
    {
        name: "exit",
        ifMatches: (command) => {
            return new Exit(command)
        },
        helpCommand: `Exits the terminal.`
    },
    {
        name: 'calculate',
        ifMatches: (command) => {
            return new Calculate(command);
        },
        helpCommand: `Calculate an equation.`
    },
    {
        name: "time",
        ifMatches: (command) => {
            return new Time(command);
        },
        helpCommand: `Shows the time`
    },
    {
        name: "date",
        ifMatches: (command)  => {
           return new DateCommand(command) ;
        },
        helpCommand: `Shows the date.`
    }, 
];



export default   (cmnd: CommandInterface): Promise<Command> => {
    
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


export const getHelpMessage = (command: string): string => {
    let message = '';


    for(let i = 0; i <= commands.length; i++){
        if(commands[i].name.toLowerCase() === command){
            message = commands[i].helpCommand;
            break;
        } else {
            message = `Command does not exist.`;
        }
    }

    return message;
}
