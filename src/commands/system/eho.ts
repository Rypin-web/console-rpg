import {getState, updateState} from '../../state/state.js'
import {MAX_LENGTH_INFOSCREEN} from "../../constants.ts";
import {delay} from "../../utils/delay.ts";
import {random} from "../../utils/random.ts";

export async function Eho(
    text: string | ' ',
    type?: 'error' | 'info' | 'notification' | 'combat' | 'default',
    del: [number, number] = [70, 50]
): Promise<void> {
    await delay(random(del[0]) + del[1])
    const infoScreen = getState('infoScreen')
    if (infoScreen.length > MAX_LENGTH_INFOSCREEN) updateState('infoScreen', [
        [text, type],
        ...infoScreen.slice(0, -1)
    ])
    else updateState('infoScreen', [[text, type], ...infoScreen])
}