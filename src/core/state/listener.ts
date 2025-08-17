import type {TState} from "../types/state/state.type";

export const listeners:[()=>void, keyof TState['cli']][] = []

export function subscribeState(l:()=>void, t: keyof TState['cli']) {
    listeners.push([l, t])
    return () => {
        const index = listeners.findIndex(([fn, key]) => (fn === l && key === t))
        if (index !== -1) listeners.splice(index, 1)
    }
}