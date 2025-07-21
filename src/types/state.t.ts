import type {CommandsState} from "./ui.t.ts";

export interface State {
    inputCommands: CommandsState,
    infoScreen: string[]
}