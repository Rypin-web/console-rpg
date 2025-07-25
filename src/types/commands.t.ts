export type Commands = {
    eho: CommandWithArgs
    help: CommandWithArgs,
    clear: CommandWithoutArgs
}

export type CommandsInfo = {
    system: string[],
}

export type CommandWithArgs = {
    fn(args: string): void,
    requireArgs: true
}

export type CommandWithoutArgs = {
    fn(): void,
    requireArgs: false
}