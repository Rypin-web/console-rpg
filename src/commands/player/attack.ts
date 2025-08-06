import {checkFlags} from "../../utils/checkFlags.ts";
import {getState, updateState} from "../../state/state.ts";
import {Eho} from "../system/eho.ts";
import {getExperience} from "./getExperience.ts";
import {Info} from "./info.ts";

export async function Attack(): Promise<void> {
    try {
        await checkFlags('playerIsCreated', false, [['Персонаж еще не создан. Команда невозможна', 'error']])
        await checkFlags('playerInCombat', false, [[`Вы не нашли врага. Атаковать некого`, 'info']])

        let player = getState('player')!
        let enemy = getState('enemy')!
        const playerDamage =  Math.round(player.stats.agility * 1.8) + Math.floor(player.stats.agility / 4)

        await Eho('Вы атакуете врага', 'combat', [200, 50])

        const enemyObtainedDamage = playerDamage - enemy.def < 0 ? 0 : playerDamage - enemy.def
        updateState('enemy', {hp: {current: enemy.hp.current - enemyObtainedDamage, max: enemy.hp.max}})
        enemy = getState('enemy')!
        await Eho(`(${enemy.name}) получил (${playerDamage}) урона!`, 'combat')

        if (enemy.hp.current <= 0) { // Враг умер
            await Eho(`(${enemy.name}) повержен!`, 'combat', [300, 50])
            await getExperience(enemy.exp * 10)

            await Eho(' ', 'default', [10, 10])
            await Eho(`Вы получили (${enemy.gold}) золота`, 'info')
            updateState('player', {gold: player.gold + enemy.gold})
            await Info('gold')

            updateState('enemy', undefined)
            updateState('constants', {killedEnemies: getState('constants').killedEnemies + 1
        })
            updateState('flags', {playerInCombat: false})
            return
        } else { // Враг выжил
            await Eho(`У (${enemy.name}) осталось (${enemy.hp.current}) здоровья`, 'info')
            await Eho(`(${enemy.name}) атакует вас!`, 'combat', [200, 50])
            const playerObtainedDamage = enemy.att - player.def < 0 ? 0 : enemy.att - player.def
            updateState('player', {hp: {current: player.hp.current - playerObtainedDamage, max: player.hp.max}})
            player = getState('player')!
            await Eho(`Вы поулчили (${playerObtainedDamage}) урона`, 'combat', [200, 50])
        }
        if (player.hp.current <= 0) { // Игрок умер
            await Eho('Вы погибли', 'notification', [300, 50])
            updateState('player', undefined)
            updateState('constants', {killedEnemies: 0})
            updateState('flags', {playerIsCreated: false, playerInCombat: false})
        }
    } catch (e) {

    }
}