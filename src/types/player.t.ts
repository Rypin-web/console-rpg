export type PlayerStats = {
    name: string | 'Путешественник',
    specialization: 'Воин' | 'Лучник',
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
    level: number
    stats:{
        strength: number, // здоровье, броня
        agility: number, // уклонение, криты
        luck: number, // дроп предметов, золота, х2 опыт
    },
    gold: number,
}