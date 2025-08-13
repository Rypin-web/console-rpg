import type {
    TCommand,
    TCommandRegister,
    TCommandRegistry, TGroupCommands,
} from "../types/parser.type";

export const commands: TCommandRegistry = {
    system: {},
    player: {},
    shop: {}
}

export const registryCommand: TCommandRegister = function (
    group,
    command,
    handler,
    requireArgs,
    description
) {
    commands[group][command] = {
        handler,
        requireArgs,
        description
    }
}

export function getCommand(group: TGroupCommands, command?: string ): TCommand | Record<string, TCommand> | undefined {
    if(typeof command === 'undefined') {
        return commands[group]
    }
    if(commands[group].hasOwnProperty(command)) return commands[group][command]
}

