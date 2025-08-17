export function calcNeedToLvlUp (need:number, coef:number):number {
    return need + Math.round(Math.pow(need, 1.75) * coef)
}
