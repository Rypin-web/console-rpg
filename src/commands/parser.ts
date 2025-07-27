import {Eho} from "./system/eho.ts";
import type {Commands} from "../types/commands.t.ts";
import {getState, updateState} from "../state/state.ts";
import {MAX_LENGTH_HiSTORY} from "../constants.ts";
import {Help} from "./system/help.ts";
import {Clear} from "./system/clear.ts";
import {Start} from "./system/start.ts";
import {isPlayerCommand, isSystemCommand, isValidCommand} from "../utils/isValidCommand.ts";
import {Info} from "./player/info.ts";

const commands: Commands = {
    system: {
        eho: {fn: Eho, requireArgs: true},
        help: {fn: Help, requireArgs: true},
        clear: {fn: Clear, requireArgs: false},
        start: {fn: Start, requireArgs: true},
    },
    player: {
        info: { fn:Info, requireArgs: true }
    }
}

export async function parseCommand(inputStroke: string) {
    const {current, history} = getState('inputCommands')
    if (!getState('flags').canSendCommand) {
        updateState('flags', {canSendCommand: true})
        return
    }
    updateState('flags', {canSendCommand: false})

    if (current.length > 0) {
        const newHistory = [current.join(''), ...history.slice(0, MAX_LENGTH_HiSTORY)]
        updateState('inputCommands', {current: [], history: newHistory, historyPosition: -1})
    }

    const parsedGroupCommand: string = inputStroke.split(' ')[0]
    const parsedCommand: string = inputStroke.split(' ')[1]
    const args = inputStroke.split(' ').splice(2, inputStroke.length).join(' ')

    await Eho('')

    if (isValidCommand(parsedGroupCommand, commands)) {
        if (parsedGroupCommand === 'system') {
            const groupCmd = commands.system
            if (isSystemCommand(parsedCommand, groupCmd)) {
                const cmd = groupCmd[parsedCommand]
                if (cmd.requireArgs) await cmd.fn(args)
                else await cmd.fn()
            } else await Eho('Неизвестная команда', 'error')
        }
        else if (parsedGroupCommand === 'player') {
            const groupCmd = commands.player
            if (isPlayerCommand(parsedCommand, groupCmd)) {
                const cmd = groupCmd[parsedCommand]
                if (cmd.requireArgs) await cmd.fn(args)
                else await cmd.fn()
            } else await Eho('Неизвестная команда', 'error')
        }else await Eho('Неизвестная команда', 'error')
    } else await Eho('Неизвестная команда', 'error')


    updateState('flags', {canSendCommand: true})
}