import {getState, updateState} from "../state";
import type {TCliOutput} from "../types/state/cliOutput.type";
import {delay, random} from "../utils";

export async function write (
    text: string | ' ',
    type: TCliOutput[1],
    del: [number, number] = [50, 50]
): Promise<void> {
    await delay(random(del[0]) + del[1])
    updateState('cli', {output: [...getState('cli').output, [text, type]]})
}