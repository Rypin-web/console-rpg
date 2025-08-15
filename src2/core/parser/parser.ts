import {tokenize} from "./tokenizer";
import {validateCommand} from "./validator";
import {executeCommand} from "./executor";
import {saveCommand} from "../history";
import {updateState} from "../state";
import {write} from "../cli";
import {checkFlag} from "../utils";

export async function parse(input: string): Promise<void> {
    saveCommand(input)
    updateState('cli', {input: []})
    await checkFlag('canSendCommand', false)
    updateState('flags', {canSendCommand: false})
    const parsedCommand = tokenize(input)
    const args = parsedCommand.args
    const command = validateCommand(parsedCommand)
    if (command.valid && command.entry) {
        await write('\n', 'default', [0, 0])
        await executeCommand(command.entry, args)
    } else console.warn(command.error)
    updateState('flags', {canSendCommand: true})
}