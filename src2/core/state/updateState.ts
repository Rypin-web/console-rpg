import type {TState} from "../types/state/state.type";
import {state} from "./state";
import {listeners} from "./listener";

export function updateState<T extends keyof TState>(
    key: T,
    values: Partial<TState[T]> | undefined
) {
    if(typeof values === 'undefined') {
        if(key === 'enemy') state.enemy = undefined
        if (key === 'player') state.player = undefined
    } else state[key] = {...state[key], ...values}
    if(typeof values !== "undefined")
    listeners.forEach((l) => {
        if (Object.keys(values).includes(l[1])) l[0]()
    })
}



