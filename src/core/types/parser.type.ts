export type TCommandHandler = (args: any) => Promise<void> | void

export type TCommand = {
    handler: TCommandHandler,
    requireArgs: boolean,
    description: string
}

export type TGroupCommands = 'sys' | 'pl' | 'sh'
export type TCommandRegistry = Record<TGroupCommands, Record<string, TCommand>>

export type TCommandRegister = (
    group: TGroupCommands,
    command: string,
    handler: TCommandHandler,
    requireArgs: boolean,
    description: string
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