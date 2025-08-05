import type {State} from "../types/state.t.ts";

type Listener = [() => void, keyof State]
const listeners: Listener[] = []

const state: State = {
    flags: {
        canSendCommand: true,
        playerInCombat: false,
        playerIsCreated: false
    },
    inputCommands: {
        current: [],
        history: [],
        historyPosition: -1
    },
    infoScreen: [],
    player: undefined,
    enemy: undefined
}

export function subscribeState(l: Listener[0], t: Listener[1]) {
    listeners.push([l, t])
    return () => {
        const index = listeners.findIndex(([fn, key]) => (fn === l && key === t))
        if (index !== -1) listeners.splice(index, 1)
    }
}

export function getState<T extends keyof State>(stateName: T): Readonly<State[T]> {
    if (!Object.hasOwn(state, stateName)) throw Error(`Unknown state name: ${stateName}`)
    return state[stateName]
}

export function updateState<T extends keyof State>(
    key: T,
    values: State[T] extends any[] ? State[T] : Partial<State[T]>
): void {
    console.log(state)
    if (!Object.hasOwn(state, key)) throw new Error(`Unknown state key: ${key}`)

    if (Array.isArray(state[key])) state[key] = values as State[T]
    else state[key] = {...state[key], ...values as Partial<State[T]>}

    listeners.forEach((l) => {
        if (l[1] === key) l[0]()
    })
}