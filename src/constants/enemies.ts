type TEnemy = {
    name: string
    hp:{
        max: number
        current: number
    }
    att: number
    def: number
    exp: number
    gold: number
}

export const Enemies: TEnemy[] = [
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
        att: 3
        ,
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
        exp: 13,
        gold: 6
    },
    {
        name: 'Гоблин',
        hp: { max: 60, current: 0 },
        att: 12,
        def: 3,
        exp: 10,
        gold: 5,
    },
    {
        name: 'Скелет',
        hp: { max: 80, current: 0 },
        att: 15,
        def: 5,
        exp: 15,
        gold: 8,
    },
]
