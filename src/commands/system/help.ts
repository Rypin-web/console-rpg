import {Eho} from "./eho.ts";
import type {CommandsInfo} from "../../types/commands.t.ts";

const commandsInfo: CommandsInfo = {
    system: [
        'Помощь по системным командам:',
        '- eho text: Выводит сообщение на экран',
        '- help [type]: Выводит подсказки по командам',
        '- clear: Очищает поле ввода'
    ]
}

export async function Help(type: keyof CommandsInfo | '') {
    if (!Object.hasOwn(commandsInfo, type) && type !== '') {
        await Eho('Unknown help type')
        return
    }
    if (type === '') for (const e of [
        'Выберите группу команд:',
        '- Cистемные: help system',
        '- Игрока: help player',
        '- Окружения: help world'
    ]) await Eho(e)
    else for (const e of commandsInfo[type]) await Eho(e)
}