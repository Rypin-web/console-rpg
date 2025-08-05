import {getState, updateState} from "../../state/state.ts";
import {Eho} from "../system/eho.ts";
import {Info} from "./info.ts";

export async function getExperience(gotExp: number) {
    const player = getState('player')!
    if (player.exp.needToLvlUp !== null && player.exp.current + gotExp >= player.exp.needToLvlUp) {
        // Повешение уровня
        await Eho('Вы повысили уровень!', 'info', [300, 100])
        const obtainedExpAfterLvlUp = player.exp.current + gotExp - player.exp.needToLvlUp
        updateState('player', {
            lvl: player.lvl + 1,
            exp: {
                current: obtainedExpAfterLvlUp,
                needToLvlUp: Math.round(player.exp.needToLvlUp * 2 * player.exp.coefficient),
                coefficient: player.exp.coefficient
            },
            points: player.points + 1
        })
        await Info('lvl')
        await Info('exp')
        await getExperience(0)
    } else {
        updateState('player', {
            exp: {
                current: player.exp.current + gotExp,
                coefficient: player.exp.coefficient,
                needToLvlUp: player.exp.needToLvlUp
            }
        })
    }
}