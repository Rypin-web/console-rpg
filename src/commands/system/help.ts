import type {TGroupCommands} from "../../core/types/parser.type";
import {write} from "../../core/cli";
import {getCommand} from "../../core/parser";
import {commands} from "../../core/parser/registry";

export async function help(type?: TGroupCommands | ''): Promise<void> {
    if (!Object.hasOwn(commands, type) && type !== '') {
        await write('Неизвестная группа команд', 'error', [200, 200])
        return
    }
    if (type === '') for (const e of [
        'Выберите группу команд:',
        '- Cистемные: help sys',
        '- Игрока: help pl',
    ]) await write(e, 'info', [200, 20])
    else {
        const groupCommands = getCommand(type)
        if(groupCommands && Object.hasOwn(commands, type))
            // @ts-ignore
            for(const e of Object.keys(groupCommands)) await write(groupCommands[e].description, 'info', [200, 20])
    }
}

