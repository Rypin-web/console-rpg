import {checkFlag} from "../../../core/utils";
import {getState, updateState} from "../../../core/state";
import {isEquip} from "../../../core/utils/isEquip.ts";
import {write} from "../../../core/cli";
import {updateStats} from "../local/updateStats.ts";

export async function unequip (id:string): Promise<void> {
    await checkFlag('playerIsCreated', false, [['Персонаж еще не создан. Команда невозможна', 'error']])
    await checkFlag('playerInCombat', true, [[`В бою нельзя менять снаряжение`, 'info']])

    const {inv, equipment, stats, def} = getState('player')!
    const item = inv.find((e) => (e?.id === id && isEquip(e) && e?.isEquipped))

    if (typeof item === 'undefined' || !isEquip(item)) {
        await write(`Такой экипированный предмет (${id}) не найден`, 'notification')
        return
    }

    const index = inv.findIndex((e) => (e === item))
    const updateEquipment = {...equipment, [item.type]: undefined}
    const updatedStats = {
        strength: stats.strength - item.stats.strength,
        agility: stats.agility - item.stats.agility,
        luck: stats.luck
    }
    const updatedDef = def - item.def
    const updatedInv = [...inv.slice(0, index), {...item, isEquipped: false}, ...inv.slice(index + 1)]
    updateState('player', {stats: updatedStats, def: updatedDef, equipment: updateEquipment, inv: updatedInv})
    await write(`Вы сняли (${item.name})`, 'notification')
    updateStats(false)
}