import {Eho} from "../system/eho.ts";
import {playerIsCreated} from "../../utils/playerIsCreated.ts";

export async function findEnemy ():Promise<void> {
    try{
        await playerIsCreated()
    } catch (e) { }
}