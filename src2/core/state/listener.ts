export const listeners:[()=>void, string][] = []

export function subscribeState(l:()=>void, t:string) {
    listeners.push([l, t])
    return () => {
        const index = listeners.findIndex(([fn, key]) => (fn === l && key === t))
        if (index !== -1) listeners.splice(index, 1)
    }
}