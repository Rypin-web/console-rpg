import {updateState} from "../../state/state.ts";

export async function Clear () {
    updateState('infoScreen', [])
}