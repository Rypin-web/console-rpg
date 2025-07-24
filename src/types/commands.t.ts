export interface Commands {
    eho: (text:string) =>void,
    help: (type:keyof  CommandsInfo | '')=>void,
    clear: () => void
}

export interface CommandsInfo {
    system: string[],
}