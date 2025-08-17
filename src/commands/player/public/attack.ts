import {checkFlag} from "../../../core/utils";
import {getState, updateState} from "../../../core/state";
import {calcPlayerDamage} from "../../../calculations/calcPlayerDamage";
import {write} from "../../../core/cli";
import {getExperience} from "../local/getExperience";

export async function attack(): Promise<void> {
    try {
        await checkFlag('playerIsCreated', false, [['Персонаж еще не создан. Команда невозможна', 'error']])
        await checkFlag('playerInCombat', false, [['Вы не нашли врага. Атаковать некого', 'info']])

        const player = getState('player')!
        const enemy = getState('enemy')!
        const playerDamage = calcPlayerDamage(player.stats.agility)
        await write(`Вы атакуете (${enemy.name})`, 'combat', [200, 50])
        const enemyObtainedDamage = playerDamage - enemy.def < 0 ? 0 : playerDamage - enemy.def
        updateState('enemy', {hp: {current: enemy.hp.current - enemyObtainedDamage, max: enemy.hp.max}})
        await write(`(${enemy.name}) получил (${playerDamage}) урона!`, 'combat')

        if (enemy.hp.current <= 0) {
            // Враг умер
            await write(`(${enemy.name}) погиб`, 'notification', [30, 50])
            await getExperience(enemy.exp * 10)
            await write(' ', 'default', [10, 10])
            await write(`Вы получили (${enemy.gold}) золота`, 'info', [30, 50])
            updateState('player', {gold: player.gold + enemy.gold})
            await write(' ', 'default', [10, 10])
            updateState('enemy', undefined)
            updateState('constants', {killedEnemies: getState('constants').killedEnemies + 1})
            updateState('flags', {playerInCombat: false})
        } else {
            await write(`У (${enemy.name}) осталось (${enemy.hp.current}) здоровья`, 'info')
            await write(`(${enemy.name}) атакует вас!`, 'combat', [200, 50])
            const playerObtainedDamage = enemy.att - player.def < 0 ? 0 : enemy.att - player.def
            updateState('player', {hp: {current: player.hp.current - playerObtainedDamage, max: player.hp.max}})
            await write(`Вы получили (${playerObtainedDamage}) урона`, 'combat', [200, 50])
        }
        if (player.hp.current <= 0) {
            await write('Вы погибли', 'notification', [300, 50])
            updateState('player', undefined)
            updateState('enemy', undefined)
            updateState('constants', {killedEnemies: 0})
            updateState('flags', {playerIsCreated: false, playerInCombat: false})
        }
    } catch (e) {
    }

}

