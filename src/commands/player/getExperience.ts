import {getState, updateState} from "../../state/state.ts";
import {Eho} from "../system/eho.ts";
import {Info} from "./info.ts";

export async function getExperience(gotExp: number) {
    const player = getState('player')!

    await Eho(' ', 'default' ,[10,10])
    if (player.exp.needToLvlUp !== null && player.exp.current + gotExp >= player.exp.needToLvlUp) {
        // Повешение уровня
        await Eho('Вы повысили уровень!', 'info', [300, 100])
        const obtainedExpAfterLvlUp = player.exp.current + gotExp - player.exp.needToLvlUp
        updateState('player', {
            lvl: player.lvl + 1,
            exp: {
                current: obtainedExpAfterLvlUp,
                needToLvlUp: player.exp.needToLvlUp + Math.round(Math.pow(player.exp.needToLvlUp, 1.75) * player.exp.coefficient),
                coefficient: player.exp.coefficient
            },
            points: player.points + 1
        })

    } else {
        updateState('player', {
            exp: {
                current: player.exp.current + gotExp,
                coefficient: player.exp.coefficient,
                needToLvlUp: player.exp.needToLvlUp
            }
        })
    }
    await Info('lvl')
    await Info('exp')
    if (player.exp.needToLvlUp !== null && player.exp.current + gotExp >= player.exp.needToLvlUp) await getExperience(0)
}