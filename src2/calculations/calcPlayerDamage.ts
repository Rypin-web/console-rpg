export function calcPlayerDamage (ag:number):number {
        return Math.round(ag * 1.8) + Math.floor(ag / 4)
}
