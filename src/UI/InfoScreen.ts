import {getState, subscribeState} from "../state/state.ts";
import {MAX_LENGTH_INFOSCREEN} from "../constants.ts";

export function setupMessageScreen(root: HTMLDivElement): void {
    const updateUi = () => {
        const currentState = getState('infoScreen')
        root.innerHTML = ''
        currentState.forEach((el) => {
            root.insertAdjacentHTML('afterbegin', `<p>${el.length > 0 ? el : '\n\n\n\n\n\n'}</p>`)
        })
        if (currentState.length > MAX_LENGTH_INFOSCREEN) if (root.firstChild) root.firstChild.remove()

    }

    subscribeState(updateUi, 'infoScreen')
}