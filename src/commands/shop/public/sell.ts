import {checkFlag} from "../../../core/utils";
import {getState, updateState} from "../../../core/state";
import {write} from "../../../core/cli";

export async function sell(id: string): Promise<void> {
    try {
        await checkFlag('inShop', false, [['Вы не в магазине', 'error']])

        const {inv, gold} = getState('player')!
        const {soldItems} = getState('shop')
        const item = inv.find((e) => (e?.id === id))

        if(typeof item === 'undefined'){
            await write(`Такого предмета нет в вашем инвентаре : (${id})`, 'notification')
            return
        }

        const index = inv.findIndex((e)=>(e === item))
        const newInventory = inv.filter((_, i) => (i !== index))
        await write(`Вы продали (${item.name}) за (${item.sellPrice}) золота`, 'notification')
        updateState('shop', {soldItems:[...soldItems, item]})
        updateState('player', {gold: gold + item.sellPrice, inv: newInventory})
    } catch (e) {
    }
}