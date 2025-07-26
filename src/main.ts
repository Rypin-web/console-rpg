import './style.css'
import {setupInputCommands} from "./UI/InputCommands.ts";
import {setupMessageScreen} from "./UI/InfoScreen.ts";
import {Eho} from "./commands/system/eho.ts";

window.onload = async () => {
    const app = document.querySelector<HTMLDivElement>('#app')!
    if (!app) throw  new Error ('Root element #app not found')

    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
      <div class='info' id='infoScreen'></div>
      <div class='input' id='inputCommands'></div>
    `

    setupInputCommands(document.querySelector<HTMLDivElement>('#inputCommands')!)
    setupMessageScreen(document.querySelector<HTMLDivElement>('#infoScreen')!)

    await Eho('Добро пожаловать в консольную RPG!', 'notification')
    await Eho('- Введите help для просмотра комманд', 'notification')
    await Eho('- Введите start для начала игры', 'notification')
}





