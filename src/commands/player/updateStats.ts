import {getState, updateState} from "../../state/state.ts";

export function updateStats () {
    const player = getState('player')!
    const newMaxHp = player.spec === 'Воин' ?
        (player.stats.strength - 8) * 2 :
        Math.round((player.stats.strength - 4) * 1.9)
    const newDef = player.spec === 'Воин' ?
        Math.round(Math.sqrt(player.stats.strength) / 1.5) :
        Math.floor(Math.sqrt(player.stats.strength) / 1.7)
    updateState('player', {
        hp:{
            max: player.hp.max + newMaxHp,
            current: player.hp.max + newMaxHp
        },
        def: player.def + newDef
    })
}