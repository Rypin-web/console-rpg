import type {TEquip, TItem} from "../types/state/item.type.ts";

export function isEquip(item: TItem): item is Readonly<TEquip> {
    if (typeof item === 'undefined') return false
    return 'type' in item
}