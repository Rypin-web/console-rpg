import type {TEquip, TItem} from "./item.type.ts";

export type TPlayer = {
    name: string | 'Путешественник',
    spec: 'воин' |  'лучник',
    hp: {
        max: number,
        current: number
    },
    equipment:{
        weapon: TEquip['id'] | undefined,
        armor: TEquip['id'] | undefined,
        shield: TEquip['id'] | undefined
    }
    exp: {
        coefficient: number,
        needToLvlUp: number | null,
        current: number
    },
    def: number,
    lvl: number
    stats: {
        strength: number, // здоровье, броня
        agility: number, // урон
        luck: number, // уклонение, дроп предметов, золота, х2 опыт
    },
    points: number
    gold: number,
    inv: TItem[]
}