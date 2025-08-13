export type TPlayer = {
    name: string | 'Путешественник',
    spec: 'воин' |  'лучник',
    hp: {
        max: number,
        current: number
    },
    exp: {
        coefficient: number,
        needToLvlUp: number | null,
        current: number
    },
    def: number,
    lvl: number
    stats: {
        strength: number, // здоровье, броня
        agility: number, // уклонение, урон
        luck: number, // дроп предметов, золота, х2 опыт
    },
    points: number
    gold: number,
}