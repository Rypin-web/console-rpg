import {playerIsCreated} from "../../utils/playerIsCreated.ts";
import {getState, updateState} from "../../state/state.ts";
import {Eho} from "../system/eho.ts";
import {ENEMIES} from "../../constants.ts";
import {random} from "../../utils/random.ts";

export async function FindEnemy ():Promise<void> {
    try{
        await playerIsCreated()
        if(getState('flags').playerInCombat){
            await Eho(`Вы уже нашли врага: ${getState('enemy')?.name}`, 'info')
            return
        }
        await Eho('Ищем врага...', 'info')

        const enemy = ENEMIES[random(ENEMIES.length)]
        updateState('enemy', enemy)
        updateState('flags', {playerInCombat: true})

        await Eho(`Враг (${enemy.name}) найден!`, 'notification')
    } catch (e) { }
}