import type {CommandsState} from "../types/ui.t.ts";

export interface State {
    inputCommands: CommandsState,
    infoScreen: string[]
}