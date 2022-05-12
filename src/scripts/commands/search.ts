import {Command, CommandResponse} from "@/scripts/command";
import {CommandInterface} from "@/scripts/parser";
import searchEngines from "@/scripts/searchEngines";

export class Search implements Command {


    constructor(public command: CommandInterface) {
    }

    name = 'search'
    description = 'Use a search engine to search a query.'

    argumentDescription = [
        {
            key: "query",
            keyDescription: "Search query"
        }
    ]

    flagDescription = [
        {
            key: "-n",
            keyDescription: "Open the query in a new tab."
        }
    ];

    optionsDescription = [
        {
            key: '--setengine',
            keyDescription: "Sets the default search engine"
        },
        {
            key: "--engine",
            keyDescription: "Sets the engine to use for this specific search"
        }
    ];


    getDefaultSearchEngine(){
        let defaultEng = localStorage.getItem('defaultSearchEngine')

        if(!defaultEng){
            localStorage.setItem('defaultSearchEngine', 'google');
            defaultEng = 'google';
        }

        return defaultEng;

    }



    execute(): Promise<CommandResponse> {
        return new Promise<CommandResponse>(((resolve, reject) => {
            let engine = searchEngines[this.getDefaultSearchEngine()];
            let openInNewTab = false;

            if(!this.command.argumentsAsString){
                return this.command.options?.forEach(opt => {
                    if(opt.key === 'setengine'){
                        const defaultEngine = searchEngines[opt.value];
                        if(!defaultEngine){
                            return reject({
                                command: this.command.command,
                                output: `Engine ${opt.value} does not exist. If you wish to add your own search engine, take a look at: `,
                                returnValue: {
                                    type: "error",
                                    furtherDetails: "Incorrect Engine Type Provided. "
                                }
                            });
                        } else {
                            localStorage.setItem('defaultSearchEngine', opt.value)
                            return resolve({
                                command: this.command.command,
                                output: 'Set your default search engine as ' + opt.value,
                                returnValue: {
                                    type: "success"
                                },
                                fullCommand: this.command.fullCommand
                            });
                        }
                    }
                })
            }


            this.command.flags?.forEach(fl => {
                if(fl === 'n'){
                    openInNewTab = true;
                }
            });

            this.command.options?.forEach(opt => {
                if(opt.key === 'engine'){
                    engine = searchEngines[opt.value] ?? searchEngines[this.getDefaultSearchEngine()];
                }
            });

            if(openInNewTab){
                window.open(`${engine.url}${encodeURIComponent(this.command.argumentsAsString as string)}`);
                return resolve({
                    command: this.command.command,
                    output: `Searching for ${this.command.argumentsAsString} on a new tab`,
                    returnValue: {
                        type: "success"
                    },
                    fullCommand: this.command.fullCommand
                });
            } else {
                window.location.href = `${engine.url}${encodeURIComponent(this.command.argumentsAsString as string)}`;
                return resolve({
                    command: this.command.command,
                    output: `Searching for ${this.command.argumentsAsString}`,
                    returnValue: {
                        type: "success"
                    },
                    fullCommand: this.command.fullCommand
                });
            }
        }))


    }
}

