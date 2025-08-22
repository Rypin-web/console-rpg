import {checkFlag} from "../../../core/utils";
import {getState, updateState} from "../../../core/state";
import {write} from "../../../core/cli";
import {isEquip} from "../../../core/utils/isEquip.ts";
import {unequip} from "../../player";

export async function sell(id: string): Promise<void> {
    try {
        await checkFlag('inShop', false, [['Вы не в магазине', 'error']])

        const {inv, gold} = getState('player')!
        const {soldItems} = getState('shop')
        let item = inv.find((e) => (e?.id === id))

        if (typeof item === 'undefined') {
            await write(`Такого предмета нет в вашем инвентаре : (${id})`, 'notification')
            return
        }

        if (isEquip(item) && item.isEquipped) {
            const anotherSameItem = inv.find((e) => (e?.id === item?.id && isEquip(e) && !e.isEquipped))
            if (typeof anotherSameItem !== "undefined") item = anotherSameItem
            else await unequip(item.id)
        }

        const index = inv.findIndex((e) => (e === item))
        const newInventory = inv.filter((_, i) => (i !== index))
        await write(`Вы продали (${item.name}) за (${item.sellPrice}) золота`, 'notification')
        updateState('shop', {soldItems: [...soldItems, item]})
        updateState('player', {gold: gold + item.sellPrice, inv: newInventory})
    } catch (e) {
    }
}