//@ts-ignore
import './style.css'
import {setupInput, setupOutput, write} from "./core/cli";
import {registryCommand} from "./core/parser";
import {clear} from "./commands/system";
import {help} from "./commands/system/help";

window.onload = async () => {
    const app = document.querySelector<HTMLDivElement>('#app')
    if (!app) throw new Error('Root element #app not found')

    app.innerHTML = `
      <div class='info' id='output'></div>
      <div class='input' id='input'></div>
    `
    setupInput(document.querySelector<HTMLDivElement>('#input')!)
    setupOutput(document.querySelector<HTMLDivElement>('#output')!)

    registryCommand('system', 'cl', clear, false, '- cl: Очищает экран')
    registryCommand('system', 'help', help, true, '- help: Помощь')
    await write('Все работает', 'notification')
    console.log('Program is running and work fine!')
}