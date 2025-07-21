import {Eho} from "./system/eho.ts";
import type {Commands} from "../types/commands.t.ts";
import {getState, updateState} from "../state/state.ts";

const commands: Commands = {
    eho: Eho,
}

export function parseCommand(inputStroke: string): void {
    const parsedCommand: string = inputStroke.split(' ')[0]
    const args = inputStroke.split(' ').splice(1, inputStroke.length).join(' ')
    const {current, history} = getState('inputCommands')

    if (Object.hasOwn(commands, parsedCommand)) {
        commands[parsedCommand](args)
    } else Eho('Unknown command')
    if (current.length > 0) {
        if (history.length > 31) updateState('inputCommands', {
            current: [],
            history: [current.join(''), ...history.splice(0, history.length - 1)]
        })
        else updateState('inputCommands', {current: [], history: [current.join(''), ...history]})
    }
}