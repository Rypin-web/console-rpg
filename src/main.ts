import './style.css'
import {setupInput, setupOutput, write} from "./core/cli";
import {registryCommand} from "./core/parser";
import {clear} from "./commands/system";
import {help} from "./commands/system/help";
import {start} from "./commands/system/start";
import {attack, equip, findEnemy, playerInfo, scan, setPoint, use} from "./commands/player";
import {goToShop} from "./commands/player/public/goToShop.ts";
import {buy, sell, shopInfo} from "./commands/shop";

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
    registryCommand('sys', 'help', help, true, '- help [key [id]]: Помощь')
    registryCommand('sys', 'st', start, true, '- st (class) [name]: Начать игру')
    registryCommand('pl', 'inf', playerInfo, true, '- inf [key]: Информация о персонаже')
    registryCommand('pl', 'fe', findEnemy, false, '- fe: Поиск врага')
    registryCommand('pl', 'scan', scan, true, '- scan [key]: Сканирование врага')
    registryCommand('pl', 'att', attack, false, '- att: Атаковать врага')
    registryCommand('pl', 'stp', setPoint, true, '- stp [point]: Распределить очко характеристик')
    registryCommand('pl', 'gtsh', goToShop, false, '- gtsh: Отправится или покинуть магазин')
    registryCommand('sh', 'inf', shopInfo, true, '- inf [id]: Информация о товарах в продаже')
    registryCommand('pl', 'u', use, true, '- u (id): Использовать расходник')
    registryCommand('sh', 'b', buy, true, '-b (id): Купить предмет')
    registryCommand('sh', 's', sell, true, '-s (id): Продать предмет')
    registryCommand('pl', 'eq', equip, true, '-eq (id): Экипировать снаряжение')

    await write('Введите sys help чтобы узнать команды', 'notification')
    console.log('Program is running and work fine!')
}