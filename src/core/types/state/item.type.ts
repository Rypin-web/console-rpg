export type TItem = Readonly<TEquip> | Readonly<TUsable> | undefined

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
    gambling:{
        die: number,
        takeDamage: number,
        restore: number,
        doubleRestore: number
    },
    effects:{
        minTakeDamage:number,
        maxTakeDamage:number,
        minRestore:number,
        maxRestore:number
    }
    price: number,
    sellPrice: number
    handle: (this:TUsable) => void
    description: string
}