import {checkFlag} from "../../../core/utils";
import {getState, updateState} from "../../../core/state";
import {isEquip} from "../../../core/utils/isEquip.ts";
import {write} from "../../../core/cli";

export async function use(id: string): Promise<void> {
    await checkFlag('playerIsCreated', false, [['Персонаж еще не создан. Команда невозможна', 'error']])

    const inventory = getState('player')!.inv
    const [item] = inventory.filter((e) => (e?.id === id))

    if (typeof item === 'undefined') {
        await write(`Такой предмет не найден (${id})`, 'notification')
        return
    }
    if (!isEquip(item)) {
        item.handle()
        let newInventory
        for (let i = 0; i < inventory.length; i++) {
            if (inventory[i] === item) {
                newInventory = inventory.filter((_, index) => (index !== i))
                break
            }
        }
        updateState('player', {inv: newInventory})
    } else {
        await write(`Это (${item.name}) (${item.id}) не расходник`, 'notification', [50, 50])
        await write('Это экипировка', 'notification', [50, 50])
        await write('Этой командой можно использовать только расходники', 'notification', [50, 50])
    }
}