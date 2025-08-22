import {checkFlag} from "../../../core/utils";
import {getState, updateState} from "../../../core/state";
import {write} from "../../../core/cli";
import {isEquip} from "../../../core/utils/isEquip.ts";
import {updateStats} from "../local/updateStats.ts";

export async function equip(id: string): Promise<void> {
    await checkFlag('playerIsCreated', false, [['Персонаж еще не создан. Команда невозможна', 'error']])
    await checkFlag('playerInCombat', true, [[`В бою нельзя менять снаряжение`, 'info']])

    const {inv, equipment, stats, def} = getState('player')!
    const item = inv.find((e) => (e?.id === id))

    if (typeof item === 'undefined') {
        await write(`Предмет (${id}) не найден`, 'notification')
        return
    }
    if (!isEquip(item)) {
        await write(`Это (${id}) рассходник. Его нельзя экипировать`, 'notification')
        await write('Используйте pl u (id) для расходников', 'notification')
        return
    }
    if (item.isEquipped) {
        await write(`Предмет (${item.name}) уже экипирован`, 'notification')
        return
    }
    if (typeof equipment[item.type] !== 'undefined') {
        const equippedItem = inv.find((e) => (e?.id === equipment[item.type]))!
        await write(`Уже экипирован предмет ${equippedItem.name}(${equippedItem.id})`, 'notification')
        await write('Снимите его, чтобы экипировать другой', 'notification')
        return
    }
    const index = inv.findIndex((e) => (e === item))
    const updateEquipment = equipment
    updateEquipment[item.type] = item.id
    const updatedStats = {
        strength: stats.strength + item.stats.strength,
        agility: stats.agility + item.stats.agility,
        luck: stats.luck
    }
    const updatedDef = def + item.def
    const updatedInv = [...inv.slice(0, index), {...item, isEquipped: true}, ...inv.slice(index + 1)]
    updateState('player', {stats: updatedStats, def: updatedDef, equipment: updateEquipment, inv: updatedInv})
    await write(`Вы эпировали (${item.name})`, 'notification')
    updateStats(false)
}