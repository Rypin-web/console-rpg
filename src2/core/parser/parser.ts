import {tokenize} from "./tokenizer";
import {validateCommand} from "./validator";
import {executeCommand} from "./executor";

export async function parse(input: string): Promise<void> {
    const parsedCommand = tokenize(input)
    const args = parsedCommand.args
    const command = validateCommand(parsedCommand)
    if(command.valid && command.entry) await executeCommand(command.entry, args)
}