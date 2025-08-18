import type {TPlayer} from "../core/types/state/player.type";

export function calcPlayerNewMaxHp (spec:TPlayer['spec'], strength:number):number {
    if(spec === 'воин') return (strength - 8) * 2
    if(spec === 'лучник') return Math.floor((strength - 4) * 1.9)

    return 0
}
