import type {Spec_Stats} from "./types/Spec_Stats.t.ts";
import type {Enemy} from "./types/enemy.t.ts";
import type {CommandsInfo} from "./types/commands.t.ts";

export const MAX_LENGTH_INPUT = 110
export const MAX_LENGTH_HiSTORY = 15
export const MAX_LENGTH_INFOSCREEN = 63
export const SPEC_STATS: Spec_Stats = {
    'Воин': {hp: 110, def: 3, stats: {strength: 8, agility: 4, luck: 3}},
    'Лучник': {hp: 100, def: 1, stats: {strength: 4, agility: 8, luck: 3}}
} as const
export const COMMANDS_INFO:CommandsInfo = {
    system: [
        'Помощь по системным командам:',
        '- eho (text): Выводит сообщение на экран',
        '- help [type]: Выводит подсказки по командам',
        '- clear: Очищает поле ввода',
        '- start (spec) [name]: Начало игры'
    ],
    player: [
        'Помощь по командам игрока:',
        '- info [key]: Выводит информацию об игроке',
        '- findEnemy: Поиск врага'
    ]
}
export const ENEMIES: Enemy[] = [
    {
        name: 'Крыса',
        hp: {
            max: 30,
            current: 0
        },
        att: 7,
        def: 1,
        exp: 4,
        gold: 2
    },
    {
        name: 'Слизень',
        hp: {
            max: 50,
            current: 0
        },
        att: 3,
        def: 3,
        exp: 5,
        gold: 2
    },
    {
        name: 'Кабан',
        hp: {
            max: 80,
            current: 0,
        },
        att: 10,
        def: 4,
        exp: 10,
        gold: 6
    }
]
