import type {TFlags} from "./flags.type";
import type {TConstants} from "./constants.type";
import type {TPlayer} from "./player.type";
import type {TEnemy} from "./enemy.type";

export type TState = {
    flags: TFlags,
    cli:{
        input: symbol[],
        output: string[],
    },
    history: {
        stack: string[],
        position: number
    },
    constants: TConstants,
    player: TPlayer | undefined,
    enemy: TEnemy | undefined
}