//@ts-ignore
import './style.css'
import {setupInput} from "./core/cli/input";

window.onload = async () => {
    const app = document.querySelector<HTMLDivElement>('#app')
    if(!app) throw new Error('Root element #app not found')

    app.innerHTML = `
      <div class='info' id='output'></div>
      <div class='input' id='input'></div>
    `
    setupInput(document.querySelector<HTMLDivElement>('#input')!)
    console.log('Program is running and work fine!')
}