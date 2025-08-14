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

export const ENEMIES: TEnemy[] = [
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
        exp: 10,
        gold: 6
    }
]
