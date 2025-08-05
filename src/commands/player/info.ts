import {Eho} from "../system/eho.ts";
import type {PlayerStats} from "../../types/player.t.ts";
import {getState} from "../../state/state.ts";
import {checkFlags} from "../../utils/checkFlags.ts";

const infoLabels = {
    name: 'Имя (name) : ',
    spec: 'Класс (spec) : ',
    hp: ['Здоровье (hp) : ', ' / '],
    exp: ['Опыт (exp) : ', ' / '],
    lvl: 'Уровень (lvl) : ',
    def: 'Защита (def) : ',
    stats: ['Характеристики (stats) :', '- Сила : ', '- Ловкость : ', '- Удача : '],
    points: 'Очки характеристик (points): ',
    gold: 'Золото (gold) : ',
}

export async function Info(key?: keyof PlayerStats | '') {
    try {
        await checkFlags('playerIsCreated', false, [['Персонаж еще не создан. Команда невозможна', 'error']])
        const p = getState('player')!
        if (typeof key !== 'undefined' && key !== '') {
            if (Object.hasOwn(infoLabels, key)) {
                const infoElement = infoLabels[key]

                if (typeof infoElement === 'string') await Eho(infoElement + p[key], 'info')
                if (Array.isArray(infoElement) && infoElement.length === 2) {
                    if (key === 'exp') await Eho(infoElement[0] + p.exp.current + infoElement[1] + p.exp.needToLvlUp, 'info')
                    if (key === 'hp') await Eho(infoElement[0] + p.hp.current + infoElement[1] + p.hp.max, 'info')
                }
                if (Array.isArray(infoElement) && infoElement.length === 4) {
                    await Eho(infoElement[0], 'info')
                    await Eho(infoElement[1] + p.stats.strength, 'info')
                    await Eho(infoElement[2] + p.stats.agility, 'info')
                    await Eho(infoElement[3] + p.stats.luck, 'info')
                }
            } else await Eho('Свойство ' + key + ' не было найдено', 'error')
            return
        }


        await Eho(infoLabels.name + p.name, 'info')
        await Eho(infoLabels.spec + p.spec, 'info')
        await Eho(infoLabels.hp[0] + p.hp.current + infoLabels.hp[1] + p.hp.max, 'info')
        await Eho(infoLabels.exp[0] + p.exp.current + infoLabels.exp[1] + p.exp.needToLvlUp, 'info')
        await Eho(infoLabels.lvl + p.lvl, 'info')
        await Eho(infoLabels.def + p.def, 'info')
        await Eho(infoLabels.stats[0], 'info')
        await Eho(infoLabels.stats[1] + p.stats.strength, 'info')
        await Eho(infoLabels.stats[2] + p.stats.agility, 'info')
        await Eho(infoLabels.stats[3] + p.stats.luck, 'info')
        await Eho(infoLabels.points + p.points, 'info')
        await Eho(infoLabels.gold + p.gold, 'info')
    } catch (e) {

    }

}