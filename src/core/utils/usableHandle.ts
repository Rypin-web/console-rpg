import type {TUsable} from "../types/state/item.type.ts";
import {getState, updateState} from "../state";
import {write} from "../cli";
import {random} from "./random.ts";

export async function usableHandle (this: TUsable) {
    const [id, value] = this.id.split('@')
    const player = getState('player')!

    switch (id){
        case 'hp':
            if(player.hp.current + Number(value) > player.hp.current) {
                updateState('player', {hp:{current: player.hp.max, max:player.hp.max}})
                await write('Вы востановили здоровье на максимум!', 'notification', [50,50])
                break
            }
            updateState('player', {hp:{current: player.hp.current + Number(value), max:player.hp.max}})
            await write(`Вы востановили здоровье на (${value})ед.`, 'notification', [50,50])
            break
        case 'brd':
            const russuanRolete = random(30)
            if(russuanRolete === 0) {
                await write(`Съев (${this.name}) вы заразились сибирской язвой и умерли`, 'notification')
                await write('Вы умерли', 'combat')
                updateState('player', undefined)
                updateState('enemy', undefined)
                updateState('shop', {itemsInSell: []})
                updateState('flags', {
                    playerInCombat: false,
                    playerIsCreated: false,
                    inShop: false
                })
                break
            }
            if(russuanRolete > 20) {
                await write(`Вы отравились`, 'notification', [50,50])
                await write(`Вы получили (${value})ед. урона`, 'combat', [50,50])
                const obtainedDamage = Number(value) - player.def < 0 ? 0 : Number(value) - player.def
                if(player.hp.current - obtainedDamage < 1){
                    await write('Вы умерли', 'combat')
                    updateState('player', undefined)
                    updateState('enemy', undefined)
                    updateState('shop', {itemsInSell: []})
                    updateState('flags', {
                        playerInCombat: false,
                        playerIsCreated: false,
                        inShop: false
                    })
                    break
                } else {
                    updateState('player', {hp:{current:player.hp.current - obtainedDamage, max:player.hp.max}})
                    break
                }
            }
            await write(`Вы восстановили (${value})ед. здоровья`, 'notification', [50,50])
            updateState('player', {hp:{current:player.hp.current + Number(value), max: player.hp.max}})
            break
        default:
            await write('Блять че за хуйня? Ты как это вызвал?', 'default', [0,0])
            break
    }
}