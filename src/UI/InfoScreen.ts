import {getState, subscribeState} from "../state/state.ts";

let prevState: string[] = []

export function setupMessageScreen(root: HTMLDivElement): void {
    const updateUi = () => {
        const currentState = getState('infoScreen')
        const newState = currentState.filter(el => !prevState.includes(el))
        newState.forEach((el)=>{
            root.insertAdjacentHTML('beforeend', `<p>${el}</p>`)
        })
        prevState = [...currentState]
    }

    subscribeState(updateUi, 'infoScreen')
}