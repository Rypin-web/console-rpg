import type {TFlags} from "../types/state/flags.type";
import type {TCliOutput} from "../types/state/cliOutput.type";
import {getState} from "../state";
import {write} from "../cli";

export async function checkFlag(flag: keyof TFlags, value: boolean, messages?: [string, TCliOutput[1]][],): Promise<void>{
    if(getState('flags')[flag] === value) {
        if(typeof messages !== "undefined") for(let e of messages) await write(...e)
        throw Error()
    }
}
