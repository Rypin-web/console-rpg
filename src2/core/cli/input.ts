import {getState, subscribeState, updateState} from "../state";
import {parse} from "../parser";

export function setupInput (root: HTMLDivElement) {
    const updateUi = () => {
        console.log('update cli')
        root.textContent = getState('cli').input.join('')
    }
    subscribeState(updateUi, 'input')

    document.addEventListener('keydown', async (ev: KeyboardEvent) => {
        const cli = getState('cli')

        if (['Key', 'Spa', 'Dig'].includes(ev.code.slice(0, 3))) {
            //TODO: Вынести в константу
            //@ts-expect-error
            if(cli.input.length > 100) return
            updateState('cli', {
                input: [...cli.input, ev.key]
            })
        }
        if(ev.code === 'Backspace') {
            updateState('cli', {
                input: cli.input.slice(0, -1)
            })
        }
        //Парсер надо
        if(ev.code === 'Enter') await parse(cli.input.join(''))

        //Историю нужно
        if(ev.code === 'ArrowUp') {
            ev.preventDefault()
            console.log('История вверх')
        }
        if(ev.code === 'ArrowDown') {
            ev.preventDefault()
            console.log('История вниз')
        }
    })
}
