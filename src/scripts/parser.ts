export interface CommandInterface {
  command: string;
  arguments?: string[];
  flags?: string[];
  options?: {
    key: string,
    value: string
  }[];
  fullCommand: string;
  argumentsAsString?: string;
}


export const parse = (input: string): CommandInterface => {

  const inputArray = input.split(' ');
  const command = inputArray[0];
  const args = inputArray.slice(1);
  const options: { key: string, value: string }[] = [];
  const flags: string[] = [];


  //we run this map because to intercept -- before we intercept -
  args.map((arg, index) => {
    if (arg.startsWith('--')) {
      //example value --name=value
      const opts = arg.split('=');
      args.splice(index, 1);
      options.push({
        key: opts[0].slice(2),
        value: opts[1]
      })
    }
  })

  args.map((arg, index) => {
    if (arg.startsWith('-')) {
      const flag = arg.slice(1).split('');
      args.splice(index, 1);
      flags.push(...flag)
    }
  })

  return {
    command: command.toLowerCase(),
    arguments: args,
    flags: flags,
    options: options,
    argumentsAsString: args.join(' '),
      fullCommand: input
  }



};
