import type {TParsedCommand} from "../types/parser.type";

export function tokenize (input: string): TParsedCommand {
    const [group, command, ...args] = input.split(' ')
    return {
        group: group?.length > 0 ? group : '',
        command: command?.length > 0 ? command : '',
        args: args.join(' ')
    }
}