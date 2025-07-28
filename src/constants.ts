export const MAX_LENGTH_INPUT = 110
export const MAX_LENGTH_HiSTORY = 15
export const MAX_LENGTH_INFOSCREEN = 63
export const SPEC_STATS:Spec_Stats = {
    'Воин': {hp: 110, def: 3, stats:{ strength: 8, agility: 4, luck: 3 }},
    'Лучник': {hp: 100, def: 1, stats: { strength: 4, agility: 8, luck: 3 }}
} as const

export type Spec_Stats = {
    'Воин': {
        hp: number, def: number, stats: {
            strength: number, agility: number, luck: number
        }
    },
    'Лучник': {
        hp: number, def: number, stats: {
            strength: number, agility: number, luck: number
        }
    }
}