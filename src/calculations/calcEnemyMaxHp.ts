export function calcEnemyMaxHp(hp: number, lvl: number, kills: number): number {
    return hp + Math.round(lvl / 2) + Math.round(Math.sqrt(kills))
}