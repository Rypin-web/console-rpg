import {getState, updateState} from "./core/state";

export async function hello (arg:string): Promise<void> {
    updateState('cli', {output: [...getState('cli').output, [arg, 'info']]})
}