import {getState, updateState} from "../state";
import {write} from "../cli";
import {diePlayer} from "./diePlayer.ts";

export async function takeDamage(damage: number) {
    const player = getState('player')!
    const obtainedDamage = damage - player.def < 0 ? 0 : damage - player.def
    await write(`Вы получили (${damage}) урона`, 'combat')
    if (player.hp.current - obtainedDamage < 1) await diePlayer()
    else updateState('player', {hp: {current: player.hp.current - obtainedDamage, max: player.hp.max}})
}
