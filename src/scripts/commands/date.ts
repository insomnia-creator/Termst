import { Command, CommandResponse } from "../command";
import { CommandInterface } from "../parser";

export class DateCommand implements Command {
    constructor(public command:CommandInterface){}

    name = "date";
    description = 'Shows the date';

    getday(){
        //format date and display it as a string
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const daydate = date.getDay()
        let dayName= ''
    
        switch (daydate) {
            case 0:
                dayName = 'Sunday';
                break;
            case 1:
                dayName = 'Monday';
                break;
            case 2:
                dayName = 'Tuesday';
                break;
            case 3:
                dayName = 'Wednesday';
                break;
            case 4:
                dayName = 'Thursday';
                break;
            case 5:
                dayName = 'Friday';
                break;
            case 6:
                dayName = 'Saturday';
                break;
            default:
                break;
        }


        return `${dayName.toString()} ${month}/${day}/${year}`;
    }
        
    async execute(): Promise<CommandResponse> {
        return {
            fullCommand: this.command.fullCommand,
            command: this.command.command,
            returnValue: {
                type: "success",
                furtherDetails: 'date command'
            },
            output: this.getday()
     
        }
    }
}