import {getState, subscribeState, updateState} from "../state";
import {coreConstants} from "../constants/core";


export function setupOutput(root: HTMLDivElement) {
    const updateUi = () => {
        const {output} = getState('cli')
        const body = document.querySelector('body')!

        if (output.length > coreConstants.MAX_LENGTH_CLI_OUTPUT) {
            if (root.firstChild) root.firstChild.remove()
            updateState('cli', {output: output.slice(1)})
        } else root.insertAdjacentHTML('beforeend', `<p
class='message-${output[output.length - 1][1]}'>
${output[output.length - 1][0]}
</p>`)

        body.scrollIntoView({
            behavior: "instant",
            block: 'end'
        })
    }

    subscribeState(updateUi, 'output')
}