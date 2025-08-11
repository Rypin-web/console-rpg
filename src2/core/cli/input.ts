import {getState} from "../state/getState";
import {subscribeState} from "../state/listener";
import {updateState} from "../state/updateState";

export function setupInput (root: HTMLDivElement) {
    const updateUi = () => {
        root.textContent = getState('cli').input.join('')
    }
    subscribeState(updateUi, 'input')

    document.addEventListener('keydown', (ev: KeyboardEvent) => {
        const cli = getState('cli')

        if (['Key', 'Spa', 'Dig'].includes(ev.code.slice(0, 3))) {
            //TODO: Вынести в константу
            //@ts-expect-error
            if(cli.input.length > 100) return
            updateState('cli', {
                input: [...cli.input, ev.key]
            })
        }
    })
}
