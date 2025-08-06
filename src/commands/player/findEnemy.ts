import {getState, updateState} from "../../state/state.ts";
import {Eho} from "../system/eho.ts";
import {ENEMIES} from "../../constants.ts";
import {random} from "../../utils/random.ts";
import {checkFlags} from "../../utils/checkFlags.ts";

export async function FindEnemy(): Promise<void> {
    try {
        await checkFlags('playerIsCreated', false, [['Персонаж еще не создан. Команда невозможна', 'error']])
        await checkFlags('playerInCombat', true, [[`Вы уже нашли врага: ${getState('enemy')?.name}`, 'info']])
        await Eho('Ищем врага...', 'info')

        const playerLvl = getState('player')!.lvl
        const {killedEnemies} = getState('constants')
        const enemy = ENEMIES[random(ENEMIES.length)]

        enemy.hp.max = enemy.hp.max + Math.round(playerLvl / 2) + Math.round(Math.sqrt(killedEnemies))
        enemy.def = enemy.def + Math.round(random(playerLvl) / 2)
        enemy.att = enemy.att + Math.round(Math.sqrt(random(playerLvl))) + Math.round(Math.sqrt(killedEnemies))

        updateState('enemy', {...enemy, hp: {current: enemy.hp.max - random(10), max: enemy.hp.max}})
        updateState('flags', {playerInCombat: true})

        await Eho(`Враг (${enemy.name}) найден!`, 'notification', [500, 500])
    } catch (e) {
    }
}