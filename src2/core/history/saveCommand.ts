import {getState, updateState} from "../state";
import {coreConstants} from "../constants/core";

export function saveCommand (input: string) {
    const history = getState('history')
    updateState('history', {position: -1})
    if(history.stack.includes(input)){
        updateState('history', {
            stack: [...history.stack.filter((v)=>{
                if(v === input) return false
                return v
            }), input]
        })
        return
    }

    if(history.stack.length >= coreConstants.MAX_LENGTH_CLI_HISTORY)
        updateState('history', {
            stack: [...history.stack.slice(1), input]
        })
    else updateState('history', {stack: [...history.stack, input]})
}