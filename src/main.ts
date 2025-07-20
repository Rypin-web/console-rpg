import './style.css'
import {setupInputCommands} from "./UI/InputCommands.ts";
import {setupMessageScreen} from "./UI/InfoScreen.ts";

window.onload = (): void => {
    const app = document.querySelector<HTMLDivElement>('#app')!
    if (!app) throw  new Error ('Root element #app not found')

    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
      <div class='info' id='infoScreen'></div>
      <div class='input' id='inputCommands'></div>
    `

    setupInputCommands(document.querySelector<HTMLDivElement>('#inputCommands')!)
    setupMessageScreen(document.querySelector<HTMLDivElement>('#infoScreen')!)
}





