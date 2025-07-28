import {SPEC_STATS} from "../constants.ts";

export function isValidSpec(spec: string): spec is keyof typeof SPEC_STATS {
    return spec in SPEC_STATS
}