export type Commands = {
    system: System
    player: Player
}

export type System = {
    eho: {
        fn(args: string, type?: 'error' | 'info' | 'notification' | 'combat' | 'default' | 'success', del?:[number, number]): Promise<void>,
        requireArgs: true
    },
    help: {
        fn(args: string): Promise<void>,
        requireArgs: true
    },
    start: {
        fn(args: string): Promise<void>,
        requireArgs: true
    },
    clear: CommandWithoutArgs,
}

export type Player = {
    info: {
        fn(arg?: string): Promise<void>,
        requireArgs: true
    },
    findEnemy:CommandWithoutArgs,
    scan: CommandWithoutArgs
}

export type CommandsInfo = {
    system: string[],
    player: string[]
}

type CommandWithoutArgs = {
    fn(): Promise<void>,
    requireArgs: false
}