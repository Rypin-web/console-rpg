import type {TState} from "../types/state/state.type";

export const state:TState = {
    flags: {
        canSendCommand: true,
        playerInCombat: false,
        playerIsCreated: false,
        inShop: false
    },
    cli: {
        input: [],
        output: []
    },
    history: {
        stack: [],
        position: -1
    },
    constants: {
        killedEnemies: 0
    },
    shop: {
        itemsInSell: [],
        soldItems: []
    },
    player: undefined,
    enemy: undefined
}