import {Eho} from "./eho.ts";
import {getState, updateState} from "../../state/state.ts";
import {SPEC_STATS} from "../../constants.ts";
import {isValidSpec} from "../../utils/isValidSpec.ts";
import {checkFlags} from "../../utils/checkFlags.ts";

export async function Start(args: string) {
    await checkFlags('playerIsCreated', true, [['Вы уже начали игру', 'info'], ['Невозможно создать двух персонажей', 'error']])
    const [specialization, name] = args.split(' ')

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
                coefficient: 0.05,
                needToLvlUp: 10,
                current: 0
            },
            def: specData.def,
            lvl: 1,
            stats: specData.stats,
            points: 0,
            gold: 0,
        })
        await Eho(`Ваш персонаж ${getState('player')?.name} создан!`, 'notification')
        updateState('flags', {playerIsCreated: true})
    } else {
        const availableSpecs = Object.keys(SPEC_STATS)
        await Eho(`Вам нужно указать специализацию (${availableSpecs.join(', ')})`, 'error')
    }
}