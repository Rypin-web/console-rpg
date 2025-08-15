import {ENEMY_INFO_LABELS} from "../../../constants/infoLabels";
import {checkFlag} from "../../../core/utils";
import {getState} from "../../../core/state";
import {write} from "../../../core/cli";


export async function scan(arg?:string):Promise<void> {
    await checkFlag('playerIsCreated', false, [['Персонаж еще не создан. Команда невозможна', 'error']])
    await checkFlag('playerInCombat', false, [['Вы не нашли врага. Сканировать некого', 'info']])

    const enemy = getState('enemy')!

    if(typeof arg !== 'undefined' && Object.hasOwn(ENEMY_INFO_LABELS, arg)){
        if(arg === 'hp') {
            await write(ENEMY_INFO_LABELS[arg][0] + enemy[arg].current + ENEMY_INFO_LABELS[arg][1] + enemy[arg].max, 'info', [250, 50])
            return
        }
        if(arg === 'exp' || arg === 'gold') {
            await write(ENEMY_INFO_LABELS[arg][0] + enemy[arg] + ENEMY_INFO_LABELS[arg][1], 'info', [250, 50])
            return
        }
        if (arg === 'name' || arg === 'att' || arg === 'def'){
            await write(ENEMY_INFO_LABELS[arg] + enemy[arg], 'info', [250, 50])
            return
        }
    }

    for (let e of Object.keys(ENEMY_INFO_LABELS)) {
        if (e === 'hp') await write(ENEMY_INFO_LABELS[e][0] + enemy[e].current + ENEMY_INFO_LABELS[e][1] + enemy[e].max, 'info', [250, 50])
        else if (e === 'exp' || e === 'gold') await write(ENEMY_INFO_LABELS[e][0] + enemy[e] + ENEMY_INFO_LABELS[e][1], 'info', [250, 50])
        else if (e === 'name' || e === 'att' || e === 'def') await write(ENEMY_INFO_LABELS[e] + enemy[e], 'info', [250, 50])
    }
}
