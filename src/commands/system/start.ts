import {Eho} from "./eho.ts";
import {getState, updateState} from "../../state/state.ts";

export async function Start(args: string) {
    const [specialization, name] = args.split(' ')
    if (typeof getState('player') === 'object') {
        await Eho('Вы уже начали игру', 'info')
        await Eho('Невозможно создать двух персонажей', 'error')
        return
    }

    switch (specialization) {
        case "Воин":
            updateState('player', {
                name: name ? name : 'Путешественник',
                specialization: specialization,
                hp: {
                    max: 110,
                    current: 110
                },
                exp: {
                    coefficient: 1.05,
                    needToLvlUp: 10,
                    current: 0
                },
                def: 3,
                level: 1,
                stats: {
                    strength: 8,
                    agility: 4,
                    luck: 3,
                },
                gold: 0,
            })
            await Eho(`Ваш персонаж ${getState('player')?.name} создан!`, 'notification')
            break
        case "Лучник":
            updateState('player', {
                name: name ? name : 'Путешественник',
                specialization: specialization,
                hp: {
                    max: 100,
                    current: 100
                },
                exp: {
                    coefficient: 1.05,
                    needToLvlUp: 10,
                    current: 0
                },
                def: 1,
                level: 1,
                stats: {
                    strength: 4,
                    agility: 8,
                    luck: 3,
                },
                gold: 0,
            })
            await Eho(`Ваш персонаж ${getState('player')?.name} создан!`, 'notification')
            break
        default:
            await Eho('Вам нужно указать специализацию (Воин, Лучник)', 'error')
            break
    }
}