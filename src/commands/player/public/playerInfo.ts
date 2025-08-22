import {getState} from "../../../core/state";
import {write} from "../../../core/cli";
import type {TPlayer} from "../../../core/types/state/player.type";
import {checkFlag} from "../../../core/utils";
import {PLAYER_INFO_LABELS} from "../../../constants/infoLabels";
import {isEquip} from "../../../core/utils/isEquip.ts";

export async function playerInfo(arg?: keyof TPlayer | ''): Promise<void> {
    try {
        await checkFlag('playerIsCreated', false, [['Персонаж еще не создан. Команда невозможна', 'error']])
        const player = getState('player')!
        if (typeof arg !== 'undefined' && arg !== '') {
            if (arg.split(' ')[0] === 'inv') {
                const itemId = arg.split(' ')[1]
                if (typeof itemId === 'undefined') {
                    await write(PLAYER_INFO_LABELS.inv, 'info', [200, 50])
                    await write(`Сейчас у вас (${player.inv.length}) предметов`, 'info')
                    for (const e of player.inv) {
                        isEquip(e) && e.isEquipped ? await write(`- ${e?.name} (${e?.id}) (Экипировано)`, 'info', [20, 30])
                            : await write(`- ${e?.name} (${e?.id})`, 'info', [20, 30])
                    }
                } else {
                    const [item] = player.inv.filter((e) => (e?.id === itemId))
                    if (typeof item === "undefined") await write('Предмет не найден в инвентаре', 'notification')
                    else {
                        await write(item.name + ` (${item.id})`, 'info', [20, 50])
                        if (isEquip(item)) {
                            await write(`Тип экипировки: (${item.type === 'weapon' ? 'Оружие'
                                : item.type === 'armor' ? 'Броня' : 'Щит'})`, 'info', [20, 50])
                            if (item.stats.strength) await write(`Улучшится сила на (${item.stats.strength})`, 'info', [20, 50])
                            if (item.stats.agility) await write(`Улучшится ловкость на (${item.stats.agility})`, 'info', [20, 50])
                            if (item.def) await write(`Улучшится броня на (${item.def})`, 'info', [20, 50])
                        }
                        await write(`Продажа: (${item.sellPrice})g`, 'info', [20, 50])
                        await write(item.description, 'info', [20, 50])
                    }
                }
                return
            }

            if (Object.hasOwn(PLAYER_INFO_LABELS, arg)) {
                //@ts-ignore
                const infoElement = PLAYER_INFO_LABELS[arg]
                if (typeof infoElement === 'string') await write(infoElement + player[arg], 'info')
                if (Array.isArray(infoElement) && infoElement.length === 2) {
                    if (arg === 'exp') await write(infoElement[0] + player.exp.current + infoElement[1] + player.exp.needToLvlUp, 'info')
                    if (arg === 'hp') await write(infoElement[0] + player.hp.current + infoElement[1] + player.hp.max, 'info')
                }
                if (Array.isArray(infoElement) && infoElement.length === 4) {
                    await write(infoElement[0], 'info')
                    await write(infoElement[1] + player.stats.strength, 'info')
                    await write(infoElement[2] + player.stats.agility, 'info')
                    await write(infoElement[3] + player.stats.luck, 'info')
                }
                return
            }
        }

        await write(PLAYER_INFO_LABELS.name + player.name, 'info')
        await write(PLAYER_INFO_LABELS.spec + player.spec, 'info')
        await write(PLAYER_INFO_LABELS.hp[0] + player.hp.current + PLAYER_INFO_LABELS.hp[1] + player.hp.max, 'info')
        await write(PLAYER_INFO_LABELS.exp[0] + player.exp.current + PLAYER_INFO_LABELS.exp[1] + player.exp.needToLvlUp, 'info')
        await write(PLAYER_INFO_LABELS.lvl + player.lvl, 'info')
        await write(PLAYER_INFO_LABELS.def + player.def, 'info')
        await write(PLAYER_INFO_LABELS.stats[0], 'info')
        await write(PLAYER_INFO_LABELS.stats[1] + player.stats.strength, 'info')
        await write(PLAYER_INFO_LABELS.stats[2] + player.stats.agility, 'info')
        await write(PLAYER_INFO_LABELS.stats[3] + player.stats.luck, 'info')
        await write(PLAYER_INFO_LABELS.points + player.points, 'info')
        await write(PLAYER_INFO_LABELS.gold + player.gold, 'info')
        await write(PLAYER_INFO_LABELS.inv, 'info')

    } catch (e) {

    }
}
