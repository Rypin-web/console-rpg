import type {TCommand} from "../types/parser.type";

export async function executeCommand(handler: TCommand, args?: string) {
    try {
        if (handler.requireArgs && args === undefined) throw Error('Arguments are required')
        if (handler.requireArgs && args !== undefined) {
            await handler.handler(args)
            return
        }
        await handler.handler()
    } catch (e) {
        console.warn(e)
        return
    }
}