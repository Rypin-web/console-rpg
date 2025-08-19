import {checkFlag} from "../../../core/utils";
import {getState, updateState} from "../../../core/state";
import {write} from "../../../core/cli";
import {generateNewStuff} from "../../shop/local/generateNewStuff.ts";

export async function goToShop ():Promise<void> {
    await checkFlag('playerIsCreated', false, [['Персонаж еще не создан. Команда не возможна', 'error']])
    await checkFlag('playerInCombat', true, [['В бою нельзя отправиться в магазин', 'error']])

    const inShop = getState('flags').inShop
    const shop = getState('shop')

    if(inShop) {
        updateState('flags', {inShop: false})
        await write('Вы ушли из магазина', 'info')
    } else{
        console.log(shop.itemsInSell.length)
        if(shop.itemsInSell.length === 0) generateNewStuff()
        updateState('flags', {inShop: true})
        await write('Вы вошли в магазин', 'info')
    }

}