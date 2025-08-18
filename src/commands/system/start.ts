import {PLAYER_CLASSES} from "../../constants/playerClasses";
import {getState, updateState} from "../../core/state";
import {write} from "../../core/cli";
import {checkFlag} from "../../core/utils";

function isValidSpec(spec: string): spec is keyof typeof PLAYER_CLASSES {
    return spec in PLAYER_CLASSES
}

export async function start(args: string): Promise<void> {
    await checkFlag('playerIsCreated', true, [['Вы уже начали игру', 'info'], ['Невозможно создать двух персонажей', 'error']])
    const [specialization, name] = args.split(' ')
    const spec = specialization.toLowerCase()

    if (isValidSpec(spec)) {
        const specData = PLAYER_CLASSES[spec]
        updateState('player', {
            name: name ? name : 'Путешественник',
            spec: spec,
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
            inv: [
                {
                    name: 'Хилка',
                    price: 213,
                    sellPrice: 213,
                    handle: ()=>1
                },{
                    name: 'Хилка',
                    price: 213,
                    sellPrice: 213,
                    handle: ()=>1
                },{
                    name: 'Хилка',
                    price: 213,
                    sellPrice: 213,
                    handle: ()=>1
                },{
                    name: 'Хилка',
                    price: 213,
                    sellPrice: 213,
                    handle: ()=>1
                }
            ]
        })
        await write(`Ваш персонаж ${getState('player')?.name} создан!`, 'notification')
        updateState('flags', {playerIsCreated: true})
    } else {
        const availableSpecs = Object.keys(PLAYER_CLASSES)
        await write(`Вам нужно указать специализацию (${availableSpecs.join(', ')})`, 'error')
    }
}