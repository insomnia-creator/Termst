# Guides
---

## Themes
Currently styling the terminal is done via sass mixins. Go to the .sass files of any theme in the src/styles directory and add custom css rules into the mixins given below.

*If you don't know what mixins are, they're just injections into the main css. For example, the TerminalWindowStyling mixin is just injecting those css rules into the main css*

## Commands

### How to make a command
Firstly go to the src/scripts/commands directory and create a new command.

Let's create a basic command which will return a Hello World output.

Take a look at the src/scripts/commands/template.ts file. You want to implement the commands class. 

```ts
import {Command, CommandResponse} from "@/scripts/command";
import {CommandInterface} from "@/scripts/parser";

export class HelloWorld implements Command {
    constructor(public command: CommandInterface) {}

    async execute(): Promise<CommandResponse> {
        return {
            command: this.command.command,
            returnValue: {type: 'success', furtherDetails: 'The command ran with perfection!'},
            output: 'Hello World!',
            fullCommand: this.command.fullCommand
        }
    }
  ```


Now let's go to src/scripts/export.ts and update our command to be in the commands array.

```ts
{
        name: 'helloworld',
        ifMatches: (command) => {
            return new HelloWorld(command);
        }, 
        helpCommand: `Returns hello world`
}
 ```   
 
There you go! Now you just need to run it.

### Command class options.

One thing you need to know about is the information arguments which is basically:
```ts
{
    key: string;
    keyDescription: string;
}
```

Pass in descriptions about arguments, options, flags etc.

For example, we have a search command which will take up the search arguments, search engine option and the new tab flag:

```ts
argumentDescription = [
        {
            key: "query",
            keyDescription: "Search query"
        }
    ]

flagDescription = [
    {
        key: "-n",
        keyDescription: "Open in new tab."
    }
];

optionsDescription = [
    
    {
        key: "--engine",
        keyDescription: "Search engine."

    }
];
```

This is basically describing what the values or options passed in will be.

All properties of a command:
```ts
name!: string;
description!: string;
argumentDescription?: KeyDescription[];
flagDescription?: KeyDescription[];
optionsDescription?: KeyDescription[];

constructor(command:CommandInterface){
    //
}

execute!: () => Promise<CommandResponse>
```

You might be asking what the purpose of all this is?

Well in the future, I want to get autocomplete into this and all these descriptions and whatnot will be really helpful.

Any obscurity in the guide please don't hesitate to open an issue.