import {getState, updateState} from "../state";


export function moveCommand(code: boolean) {
    try {
        const history = getState('history')
        if (code) {
            if (history.stack.length <= history.position + 1) {
                updateState('cli', {input: []})
                updateState('history', {position: -1})
                return
            }
            const command = history.stack[history.stack.length - 1 - (history.position + 1)]
            updateState('history', {position: history.position + 1})
            updateState('cli', {
                input: command.split(''),
            })
        }

        if (!code) {
            if (history.position === -1) {
                updateState('cli', {input: history.stack[history.stack.length - 1].split('')})
                updateState('history', {position: history.stack.length - 1})
                return
            }
            if (history.position - 1 === -1) {
                updateState('cli', {input: []})
                updateState('history', {position: -1})
                return
            }

            const command = history.stack[history.position - 1]
            updateState('history', {position: history.position - 1})
            updateState('cli', {input: command.split(''),})
        }
    } catch (e) {
    }
}