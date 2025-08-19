
export const SHOP_EQUIP = {
    'swd5':{
        id: "swd5",  // "sword" + agl 5
        name: "Ржавый меч",
        type: "weapon",
        stats: {
            strength: 0,
            agility: 5,
        },
        def:0,
        price: 50,
        sellPrice: 25,
        description: "Старый, потрёпанный меч. Ещё может резать, но недолго."
    },
    'bow8':{
        id: "bow8",  // "bow" + agl 8
        name: "Деревянный лук",
        type: "weapon",
        stats: {
            strength: 0,
            agility: 8,
        },
        def:0,
        price: 80,
        sellPrice: 40,
        description: "Простой лук, сделанный из гибкого дерева. Стреляет недалеко, но метко."
    },
    'rob3':{
        id: "rob3",  // "robe" + str 3
        name: "Роба бродяги",
        type: "armor",
        stats: {
            strength: 3,
            agility: 0,
        },
        def:0,
        price: 30,
        sellPrice: 15,
        description: "Потрёпанная одежда, которая едва защищает от ветра, не то что от ударов."
    },
    'lth7': {
        id: "lth7",  // "leather" + str 7
        name: "Кожаный доспех",
        type: "armor",
        stats: {
            strength: 7,
            agility: 0,
        },
        def:0,
        price: 120,
        sellPrice: 60,
        description: "Прочная, но гибкая кожаная броня. Лучше, чем тряпки."
    },
    'shl4':{
        id: "shl6",  // "shield" + def 4
        name: "Деревянный щит",
        type: "shield",
        stats: {
            strength: 0,
            agility: 0,
        },
        def: 4,
        price: 40,
        sellPrice: 20,
        description: "Лёгкий щит из досок. Может заблокировать пару ударов, но не больше."
    },
    'bck6':{
        id: "bck6",  // "buckler" (маленький щит) + def 6
        name: "Железный баклер",
        type: "shield",
        stats: {
            strength: 0,
            agility: 0,
        },
        def: 6,
        price: 90,
        sellPrice: 45,
        description: "Небольшой, но прочный щит. Удобен в ближнем бою."
    }
} as const

export const SHOP_USABLE = {
    'hp10':{
        id: "hp10",
        name: "Малое зелье здоровья",
        price: 30,
        sellPrice: 15,
        handle: () => {console.log('handle')},
        description: "Восстанавливает 10 HP. Пахнет травами и надеждой."
    },
    'hp25': {
        id: "hp25",
        name: "Зелье здоровья",
        price: 60,
        sellPrice: 30,
        handle: () => {console.log('handle')},
        description: "Восстанавливает 25 HP. Стандартное снадобье путника."
    },
    'brd10': {
        id: "brd10",
        name: "Чёрствый хлеб",
        price: 15,
        sellPrice: 5,
        handle: () => {console.log('handle')},
        description: "Восстанавливает 10 HP. Лучше есть в темноте, чтобы не видеть плесень."
    }
} as const
