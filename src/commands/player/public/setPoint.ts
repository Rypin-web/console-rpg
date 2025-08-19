import type {TPlayer} from "../../../core/types/state/player.type";
import {checkFlag} from "../../../core/utils";
import {getState, updateState} from "../../../core/state";
import {write} from "../../../core/cli";
import {playerInfo} from "./info";
import {updateStats} from "../local/updateStats";

export async function setPoint(point: keyof TPlayer['stats']): Promise<void> {
    try {
        await checkFlag('playerIsCreated', false, [['Персонаж еще не создан. Команда не возможна', 'error']])
        await checkFlag('playerInCombat', true, [['В бою нельзя распределять характеристики', 'error']])

        const player = getState('player')!

        if (player.points === 0) {
            await write('У вас нет очков для распределения', 'notification', [50, 50])
            return
        }
        if (Object.hasOwn(player.stats, point)) {
            await playerInfo('stats')
            await write('Распределение...', 'info', [20, 30])
            const newStats = player.stats
            newStats[point] = newStats[point] + 1
            updateState('player', {stats: newStats, points: player.points - 1})
            await playerInfo('stats')
            updateStats()
        } else {
            await write('Выберите одну из характеристик:', 'info', [200, 50])
            await write('- Сила (strength)', 'info', [20, 50])
            await write('- Ловкость (agility)', 'info', [20, 50])
            await write('- Удача (luck)', 'info', [20, 50])
        }
    } catch (e) {

    }
}
