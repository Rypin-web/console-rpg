import type {CommandsState} from "./ui.t.ts";
import type {Flags} from "./flags.t.ts";
import type {PlayerStats} from "./player.t.ts";

export type State = {
    inputCommands: CommandsState,
    infoScreen: [string, string | undefined][],
    flags: Flags,
    player?: PlayerStats
}