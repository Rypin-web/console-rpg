import {random} from "../core/utils";

export function  calcEnemyAttack (att: number, lvl:number, kills:number):number {
    return att + Math.round(Math.sqrt(random(lvl))) + Math.round(Math.sqrt(kills))
}


