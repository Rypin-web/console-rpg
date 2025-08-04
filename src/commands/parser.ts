import {Eho} from "./system/eho.ts";
import type {Commands} from "../types/commands.t.ts";
import {getState, updateState} from "../state/state.ts";
import {MAX_LENGTH_HiSTORY} from "../constants.ts";
import {Help} from "./system/help.ts";
import {Clear} from "./system/clear.ts";
import {Start} from "./system/start.ts";
import {isPlayerCommand, isSystemCommand, isValidCommand} from "../utils/isValidCommand.ts";
import {Info} from "./player/info.ts";
import {FindEnemy} from "./player/findEnemy.ts";
import {Scan} from "./player/scan.ts";
import {Attack} from "./player/attack.ts";
import {checkFlags} from "../utils/checkFlags.ts";

const commands: Commands = {
    system: {
        eho: {fn: Eho, requireArgs: true},
        help: {fn: Help, requireArgs: true},
        clear: {fn: Clear, requireArgs: false},
        start: {fn: Start, requireArgs: true},
    },
    player: {
        info: {fn: Info, requireArgs: true},
        findEnemy: {fn: FindEnemy, requireArgs: false},
        scan: {fn: Scan, requireArgs: false},
        attack: {fn: Attack, requireArgs: false}
    }
}

export async function parseCommand(inputStroke: string) {
    try {
        const {current, history} = getState('inputCommands')
        await checkFlags('canSendCommand', false)
        updateState('flags', {canSendCommand: false})

        if (current.length > 0 && !history.includes(current.join(''))) {
            const newHistory = [current.join(''), ...history.slice(0, MAX_LENGTH_HiSTORY)]
            updateState('inputCommands', {current: [], history: newHistory, historyPosition: -1})
        } else updateState('inputCommands', {current: [], history, historyPosition: -1})

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
            } else if (parsedGroupCommand === 'player') {
                const groupCmd = commands.player
                if (isPlayerCommand(parsedCommand, groupCmd)) {
                    const cmd = groupCmd[parsedCommand]
                    if (cmd.requireArgs) await cmd.fn(args)
                    else await cmd.fn()
                } else await Eho('Неизвестная команда', 'error')
            } else await Eho('Неизвестная команда', 'error')
        } else await Eho('Неизвестная команда', 'error')


        updateState('flags', {canSendCommand: true})
    } catch (e) {
    }
}