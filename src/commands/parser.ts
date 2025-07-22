import {Eho} from "./system/eho.ts";
import type {Commands} from "../types/commands.t.ts";
import {getState, updateState} from "../state/state.ts";

const commands: Commands = {
    eho: Eho,
}

function isValidCommand (cmd: string):cmd is keyof Commands {
    return cmd in commands
}

export function parseCommand(inputStroke: string): void {
    const parsedCommand: string = inputStroke.split(' ')[0]
    const args = inputStroke.split(' ').splice(1, inputStroke.length).join(' ')
    const {current, history} = getState('inputCommands')

    if (isValidCommand(parsedCommand)) {
        commands[parsedCommand](args)
    } else Eho('Unknown command')
    if (current.length > 0) {
        const newHistory = [current.join(''), ...history.slice(0, 30)]
        updateState('inputCommands', {current: [], history: newHistory, historyPosition: -1})
    }
}