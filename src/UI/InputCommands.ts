import {getState, subscribeState, updateState} from "../state/state.ts";
import {parseCommand} from "../commands/parser.ts";
import {MAX_LENGTH_INPUT} from "../constants.ts";

export function setupInputCommands(el: HTMLDivElement) {
    const updateUi = () => {
        el.textContent = getState('inputCommands').current.join('')
    }

    subscribeState(updateUi, 'inputCommands')

    document.addEventListener('keydown', (ev: KeyboardEvent) => {
        const {current, history, historyPosition} = getState('inputCommands')

        if (['Key', 'Spa', 'Dig'].includes(ev.code.slice(0, 3))) {
            if (current.length > MAX_LENGTH_INPUT) return
            updateState('inputCommands', {current: [...current, ev.key]})
        }
        if (ev.code === 'Backspace') {
            updateState('inputCommands', {current: current.slice(0, -1)})
        }
        if (ev.code === 'Enter') parseCommand(current.join(''))


        if (ev.code === 'ArrowUp') {
            if (history.length === 0) return
            if (historyPosition > history.length - 2) {
                updateState('inputCommands', {
                    current: history[0].split(''),
                    historyPosition: 0
                })
                return
            }
            updateState('inputCommands', {
                current: history[historyPosition + 1].split(''),
                historyPosition: historyPosition + 1
            })
        }
        if (ev.code === 'ArrowDown') {
            if (history.length === 0) return
            if (historyPosition - 1 < 0) {
                updateState('inputCommands', {
                    current: history[history.length - 1].split(''),
                    historyPosition: history.length - 1
                })
                return
            }
            updateState('inputCommands', {
                current: history[historyPosition - 1].split(''),
                historyPosition: historyPosition - 1
            })
        }
    })
}
