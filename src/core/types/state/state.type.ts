import type {TFlags} from "./flags.type";
import type {TConstants} from "./constants.type";
import type {TPlayer} from "./player.type";
import type {TEnemy} from "./enemy.type";
import type {TCliOutput} from "./cliOutput.type";
import type {TItem} from "./item.type.ts";

export type TState = {
    flags: TFlags,
    cli:{
        input: string[],
        output: TCliOutput[],
    },
    history: {
        stack: string[],
        position: number
    },
    constants: TConstants,
    shop: TItem[],
    player?: TPlayer,
    enemy?: TEnemy
}