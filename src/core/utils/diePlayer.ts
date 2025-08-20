import {write} from "../cli";
import {updateState} from "../state";

export async function diePlayer() {
    await write('Вы умерли', 'combat')
    updateState('player', undefined)
    updateState('enemy', undefined)
    updateState('shop', {itemsInSell: []})
    updateState('constants', {killedEnemies: 0})
    updateState('flags', {
        playerInCombat: false,
        playerIsCreated: false,
        inShop: false
    })
}