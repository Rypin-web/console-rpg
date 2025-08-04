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

        const enemy = ENEMIES[random(ENEMIES.length)]
        updateState('enemy', {...enemy, hp: {current: enemy.hp.max - random(10), max: enemy.hp.max}})
        updateState('flags', {playerInCombat: true})

        await Eho(`Враг (${enemy.name}) найден!`, 'notification', [500, 500])
    } catch (e) {
    }
}