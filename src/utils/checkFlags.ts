import type {Flags} from "../types/flags.t.ts";
import {getState} from "../state/state.ts";
import {Eho} from "../commands/system/eho.ts";

export async function checkFlags (
    flag: keyof  Flags,
    b:boolean,
    messages: [string, 'error' | 'info' | 'notification' | 'combat' | 'default'][]):Promise<void> {
    if(getState('flags')[flag] === b) {
        for(let e of messages) await Eho(...e)
        throw Error()
    }
}