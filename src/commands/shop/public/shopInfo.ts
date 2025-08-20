import {checkFlag} from "../../../core/utils";
import {getState} from "../../../core/state";
import {write} from "../../../core/cli";

export async function shopInfo(id: string): Promise<void> {
    try {
        await checkFlag('inShop', false, [['Вы не в магазине', 'error']])

        const shop = getState('shop')
        await write('Сейчас в продаже: ', 'info')
        if (id) {
            const item = shop.itemsInSell.find((e) => (e?.id === id))
            if (typeof item !== 'undefined') {
                await write(`${item.name} (${item.id}) :`, 'info', [50, 50])
                await write(`${item.description}`, 'info', [50, 50])
                await write(`Цена: ${item.price} золота`, 'info', [50, 50])
            } else await write(`Такого предмета нет в продаже : (${id})`, 'notification', [50, 50])
        } else for (const e of [...shop.itemsInSell]) {
            await write(`${e?.name} (${e?.id}) : ${e?.price}g`, "info")
        }
    } catch (e) {
    }
}