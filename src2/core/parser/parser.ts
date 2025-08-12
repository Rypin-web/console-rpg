import {tokenize} from "./tokenizer";
import {validateCommand} from "./validator";
import {executeCommand} from "./executor";
import {saveCommand} from "../history";

export async function parse(input: string): Promise<void> {
    saveCommand(input)
    const parsedCommand = tokenize(input)
    const args = parsedCommand.args
    const command = validateCommand(parsedCommand)
    if(command.valid && command.entry) await executeCommand(command.entry, args)
}