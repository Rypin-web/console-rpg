import type {TState} from "../types/state/state.type";
import {state} from "./state";
import {listeners} from "./listener";

export function updateState<T extends keyof TState> (
    key: T,
    values: Partial<TState[T]>
) {
    state[key] = {...state[key], ...values}
    listeners.forEach((l) => {
        if (l[1] === key) l[0]()
    })
}



