import {checkFlag, random} from "../../../core/utils";
import {getState, updateState} from "../../../core/state";
import {write} from "../../../core/cli";
import {Enemies} from "../../../constants/enemies";
import {calcEnemyMaxHp} from "../../../calculations/calcEnemyMaxHp";
import {calcEnemyDefence} from "../../../calculations/calcEnemyDefence";
import {calcEnemyAttack} from "../../../calculations/calcEnemyAttack";

export async function findEnemy () {
    try{
        await checkFlag('playerIsCreated', false, [['Персонаж еще не создан. Команда невозможна', 'error']])
        await checkFlag('playerInCombat', true, [[`Вы уже нашли врага: ${getState('enemy')?.name}`, 'info']])
        await write('Ищем врага...', 'info')

        const playerLvl = getState('player')!.lvl
        const killedEnemies = getState('constants').killedEnemies
        const enemy = Enemies[random(Enemies.length)]

        enemy.hp.max = calcEnemyMaxHp(enemy.hp.max, playerLvl, killedEnemies)
        enemy.def = calcEnemyDefence(enemy.def, playerLvl)
        enemy.att = calcEnemyAttack(enemy.att, playerLvl, killedEnemies)

        updateState('enemy', {...enemy, hp: {current: enemy.hp.max - random(10), max: enemy.hp.max}})
        updateState('flags', {playerInCombat: true})

        await write('Враг (' + enemy.name + ') нашелся!', 'notification', [500, 500])
    } catch (e) {
    }
}
