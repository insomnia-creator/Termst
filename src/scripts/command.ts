import {CommandInterface} from "@/scripts/parser";
export interface CommandResponse {
    output: string;
    returnValue: {
        type: 'error' | 'success';
        furtherDetails?: string;
    };
    showAsRawHTML?: boolean;
    command: string;
    additionalStyling?: string;
    additionalClass?: string;
    fullCommand: string;
}

export interface KeyDescription {
    key: string;
    keyDescription: string
}
export class Command {
    name?: string;
    description?: string;
    helpCommandDescription?: string;
    argumentDescription?: KeyDescription[];
    flagDescription?: KeyDescription[];
    optionsDescription?: KeyDescription[];

    constructor(command:CommandInterface){
        //
    }

    execute!: () => Promise<CommandResponse>
}


export interface Commands {
    name: string;
    ifMatches: (command: CommandInterface) => Command;   
}

