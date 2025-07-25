export type Commands = {
    eho: CommandWithArgs
    help: CommandWithArgs,
    clear: CommandWithoutArgs
}

export type CommandsInfo = {
    system: string[],
}

export type CommandWithArgs = {
    fn(args: string): Promise<void>,
    requireArgs: true
}

export type CommandWithoutArgs = {
    fn(): Promise<void>,
    requireArgs: false
}