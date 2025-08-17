import type {TPlayer} from "../core/types/state/player.type";

export function calcPlayerNewDef (spec:TPlayer['spec'], strength:number):number {
    if(spec === 'воин') return Math.round(Math.sqrt(strength / 1.5))
    if(spec === 'лучник') return Math.floor(Math.sqrt(strength / 1.7))

    return 0
}
