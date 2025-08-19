import {checkFlag} from "../../../core/utils";
import {getState} from "../../../core/state";
import {write} from "../../../core/cli";

export async function shopInfo (id:string):Promise<void> {
    await checkFlag('inShop', false, [['Вы не в магазине', 'error']])

    const shop = getState('shop')
    await write('Сейчас в продаже: ', 'info')
    for(const e of [...shop.itemsInSell]){
        await write(`${e?.name} (${e?.id}) : ${e?.price}g`, "info")
    }
}