import {checkFlag} from "../../../core/utils";
import {getState, updateState} from "../../../core/state";
import {write} from "../../../core/cli";
import {playerInfo} from "../../player";
import {coreConstants} from "../../../core/constants/core.ts";


export async function buy(id: string): Promise<void> {
    try {
        await checkFlag('inShop', false, [['Вы не в магазине', 'error']])

        const {itemsInSell} = getState('shop')
        const {inv , gold} = getState('player')!
        const item = itemsInSell.find((e) => (e?.id === id))

        if(typeof item === 'undefined'){
            await write(`Такого предмета нет в продаже : (${id})`, 'notification', [50, 50])
            return
        }

        if(inv.length + 1 > coreConstants.MAX_INVENTORY_SIZE) {
            await write('У вас не достаточно места в инвентаре', 'notification')
            return
        }

        if(item?.price > gold) {
            await write(`У вас недостаточно денег для покупки (${item?.name})`, 'notification')
            await write(`(${item.name}) стоит (${item.price})`, 'info')
            await write('У вас:', 'info')
            await playerInfo('gold')
            return
        }

        await write(`Вы приобрели (${item.name})`, 'notification')
        const newItemsInSell = itemsInSell.filter((e)=>(e?.id !== item.id))
        updateState('player', {inv: [...inv, item], gold: gold - item.price})
        updateState('shop', {itemsInSell: newItemsInSell})
    } catch (e) {
    }
}