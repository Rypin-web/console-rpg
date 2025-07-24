import {getState, updateState} from '../../state/state.js'
import {MAX_LENGTH_INFOSCREEN} from "../../constants.ts";
import {delay} from "../../utils/delay.ts";

export async function Eho(text: string):Promise<void> {
    await delay(100)
    const infoScreen = getState('infoScreen')
    if (infoScreen.length > MAX_LENGTH_INFOSCREEN) updateState('infoScreen', [
        text,
        ...infoScreen.slice(0, -1)
    ])
    else updateState('infoScreen', [text, ...infoScreen])
}