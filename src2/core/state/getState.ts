import type {TState} from "../types/state/state.type";
import {state} from "./state";

export function getState<T extends keyof TState> (key: T): Readonly<TState[T]> {
    return state[key]
}


