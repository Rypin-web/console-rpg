export type TItem = TEquip | TUsable

export type TEquip = {
    id: string,
    name: string,
    type: 'weapon' | 'armor' | 'shield',
    stats: {
        strength?: number,
        agility?: number,
    },
    def?: number,
    price: number,
    sellPrice:number,
    description: string
}

export type TUsable = {
    id:string,
    name: string,
    price: number,
    sellPrice: number
    handle: () => void
    description: string
}