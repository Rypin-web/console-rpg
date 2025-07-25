import type {CommandsState} from "./ui.t.ts";
import type {Flags} from "./flags.t.ts";

export interface State {
    inputCommands: CommandsState,
    infoScreen: string[],
    flags: Flags
}