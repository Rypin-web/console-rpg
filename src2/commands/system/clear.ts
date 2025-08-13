import {updateState} from "../../core/state";

export async function clear ():Promise<void> {
    updateState('cli', {output: []})
}