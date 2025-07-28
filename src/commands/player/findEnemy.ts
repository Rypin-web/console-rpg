import {Eho} from "../system/eho.ts";
import {playerIsCreated} from "../../utils/playerIsCreated.ts";
import {random} from "../../utils/random.ts";

export async function FindEnemy ():Promise<void> {
    try{
        await playerIsCreated()
        console.log(random(10))
    } catch (e) { }
}