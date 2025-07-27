import type {Commands, Player, System} from "../types/commands.t.ts";

export function isValidCommand(cmd: string, commands: Commands): cmd is keyof Commands {
    return cmd in commands
}

export function isSystemCommand(cmd: string, groupObj: System): cmd is keyof System {
    return cmd in groupObj
}

export function isPlayerCommand(cmd: string, groupObj: Player): cmd is keyof Player {
    return cmd in groupObj
}