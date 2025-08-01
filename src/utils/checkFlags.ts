import type {Flags} from "../types/flags.t.ts";
import {getState} from "../state/state.ts";
import {Eho} from "../commands/system/eho.ts";

export async function checkFlags (flag: keyof  Flags, messages: [string, 'error' | 'info' | 'notification' | 'combat' | 'default'][]):Promise<void> {
    if(getState('flags')[flag]) {
        for(let e of messages) await Eho(e[0], e[1])
        throw Error()
    }
}