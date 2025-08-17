import {getState} from "../../../core/state";
import {write} from "../../../core/cli";
import type {TPlayer} from "../../../core/types/state/player.type";
import {checkFlag} from "../../../core/utils";
import {PLAYER_INFO_LABELS} from "../../../constants/infoLabels";

export async function info(arg?: keyof TPlayer | ''): Promise<void> {
    try {
        await checkFlag('playerIsCreated', false, [['Персонаж еще не создан. Команда невозможна', 'error']])
        const player = getState('player')!
        if (typeof arg !== 'undefined' && arg !== '') {
            if (Object.hasOwn(PLAYER_INFO_LABELS, arg)) {
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

    } catch (e) {

    }
}
