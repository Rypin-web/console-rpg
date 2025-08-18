export const PLAYER_INFO_LABELS ={
    name: 'Имя (name) : ',
    spec: 'Класс (spec) : ',
    hp: ['Здоровье (hp) : ', ' / '],
    exp: ['Опыт (exp) : ', ' / '],
    lvl: 'Уровень (lvl) : ',
    def: 'Защита (def) : ',
    stats: ['Характеристики (stats) :', '- Сила : ', '- Ловкость : ', '- Удача : '],
    points: 'Очки характеристик (points): ',
    gold: 'Золото (gold) : ',
    inv: 'Предметы инвентаря:'
} as const

export const ENEMY_INFO_LABELS = {
    name: 'Враг (name): ',
    hp: ['Здоровье (hp): ', ' / '],
    att: 'Атака (att): ',
    def: 'Защита (def): ',
    exp: ['Вы получите (exp): ', ' опыта'],
    gold: ['Вы получите (gold): ', ' золота']
} as const