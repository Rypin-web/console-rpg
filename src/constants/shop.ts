import {usableHandle} from "../core/utils/usableHandle.ts";

export const SHOP_EQUIP = {
    'wpn1': {
        id: "wpn1",
        name: "Ржавый меч",
        type: "weapon",
        stats: {
            strength: 0,
            agility: 5,
        },
        def: 0,
        price: 50,
        sellPrice: 25,
        description: "Старый, потрёпанный меч. Ещё может резать, но недолго."
    },
    'wpn2': {
        id: "wpn2",
        name: "Деревянный лук",
        type: "weapon",
        stats: {
            strength: 0,
            agility: 8,
        },
        def: 0,
        price: 80,
        sellPrice: 40,
        description: "Простой лук, сделанный из гибкого дерева. Стреляет недалеко, но метко."
    },
    'arm1': {
        id: "arm1",
        name: "Роба бродяги",
        type: "armor",
        stats: {
            strength: 3,
            agility: 0,
        },
        def: 0,
        price: 30,
        sellPrice: 15,
        description: "Потрёпанная одежда, которая едва защищает от ветра, не то что от ударов."
    },
    'arm2': {
        id: "arm2",
        name: "Кожаный доспех",
        type: "armor",
        stats: {
            strength: 7,
            agility: 0,
        },
        def: 0,
        price: 120,
        sellPrice: 60,
        description: "Прочная, но гибкая кожаная броня. Лучше, чем тряпки."
    },
    'shl1': {
        id: "shl1",
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
    'shl2': {
        id: "shl2",
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
    'p1': {
        id: "p1",
        name: "Малое зелье здоровья",
        gambling: {die: 0, takeDamage: 0, restore: 100, doubleRestore: 5},
        effects: {minTakeDamage: 0, maxTakeDamage: 0, minRestore: 10, maxRestore: 15},
        price: 30,
        sellPrice: 10,
        handle: usableHandle,
        description: "Надёжное зелье, сваренное подмастерьем алхимика. Восстанавливает 15 здоровья."
    },
    'p2': {
        id: "p2",
        name: "Зелье здоровья",
        gambling: {die: 0, takeDamage: 0, restore: 100, doubleRestore: 5},
        effects: {minTakeDamage: 0, maxTakeDamage: 0, minRestore: 20, maxRestore: 25},
        price: 50,
        sellPrice: 20,
        handle: usableHandle,
        description: "Надёжное зелье алхимика. Восстанавливает 25 здоровья."
    },
    'f1': {
        id: "f1",
        name: "Чёрствый хлеб",
        gambling: {die: 3, takeDamage: 20, restore: 77, doubleRestore: 0},
        effects: {minTakeDamage: 5, maxTakeDamage: 12, minRestore: 8, maxRestore: 15},
        price: 10,
        sellPrice: 2,
        handle: usableHandle,
        description: "Хлеб, пропитанный скверной. Пахнет плесенью и отчаянием."
    },

    'f2': {
        id: "f2",
        name: "Мясо крысы",
        gambling: {die: 5, takeDamage: 25, restore: 70, doubleRestore: 0},
        effects: {minTakeDamage: 8, maxTakeDamage: 18, minRestore: 12, maxRestore: 20},
        price: 15,
        sellPrice: 4,
        handle: usableHandle,
        description: "Мясо мутировавшей крысы. Шерсть ещё осталась между зубов."
    },
    'f3': {
        id: "f3",
        name: "Гриб",
        gambling: {die: 8, takeDamage: 30, restore: 62, doubleRestore: 0},
        effects: {minTakeDamage: 10, maxTakeDamage: 22, minRestore: 15, maxRestore: 25},
        price: 12,
        sellPrice: 3,
        handle: usableHandle,
        description: "Бледный гриб с ядовитым отливом. Вызывает видения."
    },
    'f4': {
        id: "rot_berry",
        name: "Ягоды",
        gambling: {die: 2, takeDamage: 35, restore: 63, doubleRestore: 0},
        effects: {minTakeDamage: 3, maxTakeDamage: 10, minRestore: 5, maxRestore: 12},
        price: 8,
        sellPrice: 1,
        handle: usableHandle,
        description: "Ягоды, растущие на гниющих трупах. Сладковатый привкус тлена."
    },
} as const
