import {getState, updateState} from "../../../core/state";
import {write} from "../../../core/cli";
import {playerInfo} from "../public/playerInfo.ts";
import {calcNeedToLvlUp} from "../../../calculations/calcNeedToLvlUp";

export async function getExperience(gotExp: number) {
    const player = getState('player')!

    await write(' ', 'default' ,[10,10])
    if (player.exp.needToLvlUp !== null && player.exp.current + gotExp >= player.exp.needToLvlUp) {
        // Повешение уровня
        await write('Вы повысили уровень!', 'info', [300, 100])
        const obtainedExpAfterLvlUp = player.exp.current + gotExp - player.exp.needToLvlUp
        updateState('player', {
            lvl: player.lvl + 1,
            exp: {
                current: obtainedExpAfterLvlUp,
                needToLvlUp: calcNeedToLvlUp(player.exp.needToLvlUp, player.exp.coefficient),
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
    await playerInfo('lvl')
    await playerInfo('exp')
    // Полученный опыт после повышения больше требуемого для нового повышения уровня
    if (player.exp.needToLvlUp !== null && player.exp.current + gotExp >= player.exp.needToLvlUp) await getExperience(0)
}