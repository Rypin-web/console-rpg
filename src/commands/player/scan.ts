import {checkFlags} from "../../utils/checkFlags.ts";
import {getState} from "../../state/state.ts";
import {Eho} from "../system/eho.ts";

const enemyInfoLabels = {
    name: 'Враг: ',
    hp: ['Здоровье: ', ' / '],
    att: 'Аттака: ',
    def: 'Защита: ',
    exp: ['Вы получите: ', ' опыта'],
    gold: ['Вы получите: ', ' золота']
}

export async function Scan() {
    await checkFlags('playerIsCreated', false, [['Персонаж еще не создан. Команда невозможна', 'error']])
    await checkFlags('playerInCombat', false, [[`Вы не нашли врага. Сканировать некого`, 'info']])

    const enemy = getState('enemy')!
    for (let e of Object.keys(enemyInfoLabels)) {
        if (e === 'hp') await Eho(enemyInfoLabels[e][0] + enemy[e].current + enemyInfoLabels[e][1] + enemy[e].max, 'info', [250, 50])
        else if (e === 'exp' || e === 'gold') await Eho(enemyInfoLabels[e][0] + enemy[e] + enemyInfoLabels[e][1], 'info', [250, 50])
        //@ts-ignore
        else await Eho(enemyInfoLabels[e] + enemy[e], 'info', [250, 50])
    }
}