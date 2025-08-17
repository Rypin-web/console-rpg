import {getState, updateState} from "../../../core/state";
import {calcPlayerNewMaxHp} from "../../../calculations/calcPlayerNewMaxHp";
import {calcPlayerNewDef} from "../../../calculations/calcPlayerNewDef";

export function updateStats() {
    const player = getState('player')!
    const newMaxHp = calcPlayerNewMaxHp(player.spec, player.stats.strength) + player.hp.max
    const newDef = calcPlayerNewDef(player.spec, player.stats.strength) + player.def
    updateState('player', {
        hp: {max: newMaxHp, current: newMaxHp},
        def: newDef
    })
}
