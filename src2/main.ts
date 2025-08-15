//@ts-ignore
import './style.css'
import {setupInput, setupOutput, write} from "./core/cli";
import {registryCommand} from "./core/parser";
import {clear} from "./commands/system";
import {help} from "./commands/system/help";
import {start} from "./commands/system/start";
import {findEnemy, info, scan} from "./commands/player";

window.onload = async () => {
    const app = document.querySelector<HTMLDivElement>('#app')
    if (!app) throw new Error('Root element #app not found')

    app.innerHTML = `
      <div class='info' id='output'></div>
      <div class='input' id='input'></div>
    `
    setupInput(document.querySelector<HTMLDivElement>('#input')!)
    setupOutput(document.querySelector<HTMLDivElement>('#output')!)

    registryCommand('sys', 'cl', clear, false, '- cl: Очищает экран')
    registryCommand('sys', 'help', help, true, '- help [key]: Помощь')
    registryCommand('sys', 'st', start, true, '- st (class) [name]: Начать игру')
    registryCommand('pl', 'inf', info, true, '- inf [key]: Информация о персонаже')
    registryCommand('pl', 'fe', findEnemy, false, '- fe: Поиск врага')
    registryCommand('pl', 'scan', scan, true, '- scan [key]: Сканирование врага')

    await write('Все работает', 'notification')
    console.log('Program is running and work fine!')
}