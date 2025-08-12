export type TCommandHandler = (args?: string) => Promise<void> | void

export type TCommand = {
    handler: TCommandHandler,
    requireArgs: boolean
}

export type TGroupCommands = 'system' | 'player' | 'shop'
export type TCommandRegistry = Record<TGroupCommands, Record<string, TCommand>>

export type TCommandRegister = (
    group: TGroupCommands,
    command: string,
    handler: TCommandHandler,
    requireArgs: boolean
) => void

export type TParsedCommand = {
    group: string,
    command: string,
    args: string
}

export type TValidatorResult = {
    valid: boolean,
    entry?: TCommand,
    error?: string
}