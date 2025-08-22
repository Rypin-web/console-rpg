import {checkFlag} from "../../../core/utils";
import {getState, updateState} from "../../../core/state";
import {coreConstants} from "../../../core/constants/core.ts";
import {write} from "../../../core/cli";
import {generateNewStuff} from "../local/generateNewStuff.ts";

export async function updateShop():Promise<void> {
    await checkFlag('inShop', false, [['Вы не в магазине', 'error']])

    const {gold} = getState('player')!
    if(gold - coreConstants.SHOP_UPDATE_COST < 0) {
        await write(`У вас не достаточно золота`, 'notification')
        await write(`Нужно (${coreConstants.SHOP_UPDATE_COST}) золота, чтобы обновить магазин`, 'notification')
        return
    }
    updateState('player', {gold: gold - coreConstants.SHOP_UPDATE_COST})
    updateState('shop', {itemsInSell: []})
    generateNewStuff()
    await write('Магазин обновлен', 'notification')
}