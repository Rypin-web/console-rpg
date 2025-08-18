export type TItem = TEquip | TUsable

export type TEquip = {
    name: string,
    type: 'weapon' | 'armor' | 'shield',
    stats: {
        strength?: number,
        agility?: number,
    },
    def?: number,
    price: number,
    sellPrice:number,
}

export type TUsable = {
    name: string,
    price: number,
    sellPrice: number
    handle: () => void
}