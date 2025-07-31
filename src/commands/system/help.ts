import {Eho} from "./eho.ts";
import {COMMANDS_INFO} from "../../constants.ts";
import type {CommandsInfo} from "../../types/commands.t.ts";

export async function Help(type: keyof CommandsInfo | '') {
    if (!Object.hasOwn(COMMANDS_INFO, type) && type !== '') {
        await Eho('Неизвестная группа команд', 'error', [200, 200])
        return
    }
    if (type === '') for (const e of [
        'Выберите группу команд:',
        '- Cистемные: help system',
        '- Игрока: help player',
    ]) await Eho(e, 'info', [200, 20])
    else for (const e of COMMANDS_INFO[type]) await Eho(e, 'info', [200, 20])
}