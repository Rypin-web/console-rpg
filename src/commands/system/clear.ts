import {updateState} from "../../state/state.ts";

export function Clear () {
    updateState('infoScreen', [])
}