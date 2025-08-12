type TCommandFlags = {
    requireArgs: boolean,
}

export type TCommandHandler = (args: string) => Promise<void> | void

export type TCommand = {
    handler: TCommandHandler,
    flags: TCommandFlags
}

export type TGroupCommands = 'system' | 'player' | 'shop'
export type TCommandRegistry = Record<TGroupCommands, Record<string, TCommand>>

export type TCommandRegister = (
    group: TGroupCommands,
    command: string,
    handler: TCommandHandler,
    flags: Partial<TCommandFlags>
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