import {getState, subscribeState, updateState} from "../state";
import {parse} from "../parser";
import {coreConstants} from "../constants/core";
import {moveCommand} from "../history";

export function setupInput (root: HTMLDivElement) {
    const updateUi = () => {
        console.log('update cli')
        root.textContent = getState('cli').input.join('')
    }
    subscribeState(updateUi, 'input')

    document.addEventListener('keydown', async (ev: KeyboardEvent) => {
        const cli = getState('cli')

        if (['Key', 'Spa', 'Dig'].includes(ev.code.slice(0, 3))) {
            if(ev.code === 'Space' && cli.input[cli.input.length - 1] === ' ') return
            if(cli.input.length > coreConstants.MAX_LENGTH_CLI_INPUT) return
            updateState('cli', {
                input: [...cli.input, ev.key]
            })
        }
        if(ev.code === 'Backspace') {
            updateState('cli', {
                input: cli.input.slice(0, -1)
            })
        }
        if(ev.code === 'Enter') await parse(cli.input.join(''))

        if(ev.code === 'ArrowUp') {
            ev.preventDefault()
            moveCommand(true)
        }
        if(ev.code === 'ArrowDown') {
            ev.preventDefault()
            moveCommand(false)
        }
    })
}
