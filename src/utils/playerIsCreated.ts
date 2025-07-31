import {getState} from "../state/state.ts";
import {Eho} from "../commands/system/eho.ts";

export async function playerIsCreated () {
    if(getState('flags').playerIsCreated) {
        await Eho('Персонаж еще не создан. Команда невозможна', 'error')
        throw Error()
    }
}