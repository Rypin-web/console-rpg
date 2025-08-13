import type {TGroupCommands, TParsedCommand, TValidatorResult} from "../types/parser.type";
import {commands, getCommand} from "./registry";

export function validateCommand (parsed: TParsedCommand):TValidatorResult {
    const {group, command} = parsed

    if(!(group in commands)) return {
        valid: false,
        error: `Unknown group : ${group}`
    }

    if(!(command in commands[group as TGroupCommands])) return {
        valid: false,
        error: `Unknown command : ${command}`
    }

    const entry = getCommand(group as TGroupCommands, command)
    if(entry === null) return {
        valid: false,
        error: `Unknown command : ${command}`
    }

    return {
        valid: true,
        //@ts-ignore
        entry
    }
}