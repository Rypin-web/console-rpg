export interface Commands {
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
        fn(args:string): Promise<void>,
        requireArgs: true
    }
}

export type CommandsInfo = {
    system: string[],
}

type CommandWithoutArgs = {
    fn(): Promise<void>,
    requireArgs: false
}