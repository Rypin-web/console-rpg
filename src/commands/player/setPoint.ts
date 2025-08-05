import {checkFlags} from "../../utils/checkFlags.ts";
import {Eho} from "../system/eho.ts";
import {getState, updateState} from "../../state/state.ts";
import {Info} from "./info.ts";

export async function SetPoint(point: 'strength' | 'agility' | 'luck') {
    try {
        await checkFlags('playerIsCreated', false, [['Персонаж еще не создан. Команда не возможна', 'error']])
        await checkFlags('playerInCombat', true, [['Команда невозможна', 'error'], ['В бою нельзя распределять' +
        ' характеристики', 'info']])

        const player = getState('player')!

        if (['strength', 'agility', 'luck'].includes(point)) {
            //распределение
            if (player.points <= 0) {
                await Eho('У вас нет очков для распределения', 'notification')
                await Info('points')
                return
            }
            await Info("stats")
            await Eho('Распределение ...' , 'info')
            const newStats = player.stats
            newStats[point] = newStats[point] + 1
            updateState('player', {
                stats: newStats,
                points: player.points - 1
            })
            await Info('stats')
        } else {
            await Eho('Выберите одну из трех характеристик: ', 'notification', [300, 50])
            await Eho('- Сила (strength) ', 'notification', [50, 50])
            await Eho('- Ловкость (agility) ', 'notification', [50, 50])
            await Eho('- Удача (luck) ', 'notification', [50, 50])
        }
    } catch (e) {

    }
}