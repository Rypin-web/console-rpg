import type {TUsable} from "../types/state/item.type.ts";
import {getState, updateState} from "../state";
import {write} from "../cli";
import {random} from "./random.ts";


export async function usableHandle(this: TUsable) {
    const player = getState('player')!
    const randomNumber = random(100)

    if (randomNumber < this.gambling.die) {
        await write(`Съев (${this.name}) вы заразились и умерли`, 'notification', [50, 50])
        await diePlayer()
        return
    }
    if (randomNumber < this.gambling.takeDamage) {
        await write(`Съев (${this.name}) вы отравились`, 'notification', [50, 50])
        await takeDamage(this.effects.minTakeDamage + random(this.effects.maxTakeDamage - this.effects.minTakeDamage))
        return
    }
    const restored = random(100) < this.gambling.doubleRestore
        ? (this.effects.minRestore + random(this.effects.maxRestore - this.effects.minRestore)) * 2
        : this.effects.minRestore + random(this.effects.maxRestore - this.effects.minRestore)
    await write(`Вы восстановили (${restored}) здоровья`, 'notification', [50, 50])
    const currentHp = Math.min(player.hp.current + restored, player.hp.max)
    updateState('player', {hp: {current: currentHp, max: player.hp.max}})
}

async function takeDamage(damage: number) {
    const player = getState('player')!
    const obtainedDamage = damage - player.def < 0 ? 0 : damage - player.def
    await write(`Вы получили (${damage}) урона`, 'combat')
    if (player.hp.current - obtainedDamage < 1) await diePlayer()
    else updateState('player', {hp: {current: player.hp.current - obtainedDamage, max: player.hp.max}})
}

async function diePlayer() {
    await write('Вы умерли', 'combat')
    updateState('player', undefined)
    updateState('enemy', undefined)
    updateState('shop', {itemsInSell: []})
    updateState('constants', {killedEnemies: 0})
    updateState('flags', {
        playerInCombat: false,
        playerIsCreated: false,
        inShop: false
    })
}