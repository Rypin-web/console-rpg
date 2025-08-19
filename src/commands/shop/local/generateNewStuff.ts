import {SHOP_EQUIP, SHOP_USABLE} from "../../../constants/shop.ts";
import {random} from "../../../core/utils";
import {updateState} from "../../../core/state";

export function generateNewStuff () {
    const equipKeys = Object.keys(SHOP_EQUIP) as (keyof typeof SHOP_EQUIP)[]
    const usableKeys = Object.keys(SHOP_USABLE) as (keyof typeof SHOP_USABLE)[]
    const firstSlot = SHOP_EQUIP[equipKeys[random(equipKeys.length)]]
    const secondSlot = SHOP_EQUIP[equipKeys[random(equipKeys.length)]]
    const thirdSlot = SHOP_USABLE[usableKeys[random(usableKeys.length)]]
    updateState('shop', [firstSlot, secondSlot, thirdSlot])
}