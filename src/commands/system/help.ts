import {Eho} from "./eho.ts";
import type {CommandsInfo} from "../../types/commands.t.ts";

const commandsInfo: CommandsInfo = {
    system: `Помощь по системным командам:\n
    - eho text: Выводит сообщение на экран\n
    - help [type]: Выводит подсказки по командам\n
    - clear: Очищает поле ввода
    `
}

export function Help(type: keyof CommandsInfo | ''): void {
    if (type === '')
        Eho(`Выберите группу команд:\n
        - Системные: help system\n
        - Игрока: help player\n
        - Окружения: help world
        `)
    else Eho(commandsInfo[type])
}