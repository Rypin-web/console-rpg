export type Commands = {
    system: System
    player: Player
}

export type System = {
    eho: {
        fn(args: string, type?: 'error' | 'info' | 'notification' | 'combat' | 'default' | 'success'): Promise<void>,
        requireArgs: true
    },
    help: {
        fn(args: string): Promise<void>,
        requireArgs: true
    },
    clear: CommandWithoutArgs,
    start: {
        fn(args: string): Promise<void>,
        requireArgs: true
    },
}

export type Player = {
    info: {
        fn(arg?: string): Promise<void>,
        requireArgs: true
    }
}

export type CommandsInfo = {
    system: string[],
    player: string[]
}

type CommandWithoutArgs = {
    fn(): Promise<void>,
    requireArgs: false
}