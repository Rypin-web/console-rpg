import type {
    TCommand,
    TCommandRegister,
    TCommandRegistry, TGroupCommands,
} from "../types/parser.type";

export const commands: TCommandRegistry = {
    system: {
        help:{
            handler: async (args: string) => {
                console.log(args)
            },
            flags:{
                requireArgs:true
            }
        }
    },
    player: {},
    shop: {}
}

export const registryCommand: TCommandRegister = function (
    group,
    command,
    handler,
    flags = {}
) {
    commands[group][command] = {
        handler,
        flags: {
            requireArgs: false,
            ...flags
        }
    }
}

export function getCommand(group: TGroupCommands, command: string ): TCommand | null {
    if(commands[group].hasOwnProperty(command)) return commands[group][command]
    else return null
}

