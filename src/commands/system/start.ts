import {Eho} from "./eho.ts";
import {getState, updateState} from "../../state/state.ts";
import {SPEC_STATS} from "../../constants.ts";
import {isValidSpec} from "../../utils/isValidSpec.ts";

export async function Start(args: string) {
    const [specialization, name] = args.split(' ')
    if (getState('player')?.name) {
        await Eho('Вы уже начали игру', 'info')
        await Eho('Невозможно создать двух персонажей', 'error')
        return
    }

    if (isValidSpec(specialization)) {
        const specData = SPEC_STATS[specialization]
        updateState('player', {
            name: name ? name : 'Путешественник',
            spec: specialization,
            hp: {
                max: specData.hp,
                current: specData.hp
            },
            exp: {
                coefficient: 1.05,
                needToLvlUp: 10,
                current: 0
            },
            def: specData.def,
            lvl: 1,
            stats: specData.stats,
            gold: 0,
        })
        await Eho(`Ваш персонаж ${getState('player')?.name} создан!`, 'notification')
    } else  {
        const availableSpecs = Object.keys(SPEC_STATS)
        await Eho(`Вам нужно указать специализацию (${availableSpecs.join(', ')})`, 'error')
    }
}