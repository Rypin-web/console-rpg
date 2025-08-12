import type {TCommand} from "../types/parser.type";

export async function executor(handler: TCommand, args: string) {
    try {
        if (handler.requireArgs) {
            await handler.handler(args)
            return
        }
        await handler.handler(args)
    } catch (e) {
        console.warn(e)
        return
    }
}