import {Eho} from "./system/eho.ts";
import type {Commands} from "../types/commands.t.ts";
import {getState, updateState} from "../state/state.ts";
import {MAX_LENGTH_HiSTORY} from "../constants.ts";
import {Help} from "./system/help.ts";
import {Clear} from "./system/clear.ts";

const commands: Commands = {
    eho: {
        fn: Eho,
        requireArgs: true
    },
    help: {
        fn: Help,
        requireArgs: true
    },
    clear: {
        fn: Clear,
        requireArgs: false
    }
}

function isValidCommand(cmd: string): cmd is keyof Commands {
    return cmd in commands
}

export async function parseCommand(inputStroke: string) {
    const parsedCommand: string = inputStroke.split(' ')[0]
    const args = inputStroke.split(' ').splice(1, inputStroke.length).join(' ')
    const {current, history} = getState('inputCommands')

    await Eho('')
    if (isValidCommand(parsedCommand) && commands[parsedCommand].requireArgs) commands[parsedCommand].fn(args)
    else if ((isValidCommand(parsedCommand) && !commands[parsedCommand].requireArgs)) commands[parsedCommand].fn()
    else await Eho('Unknown command')

    if (current.length > 0) {
        const newHistory = [current.join(''), ...history.slice(0, MAX_LENGTH_HiSTORY)]
        updateState('inputCommands', {current: [], history: newHistory, historyPosition: -1})
    }
}