export interface Commands {
    eho: (text:string) =>void,
    help: (type:keyof  CommandsInfo | '')=>void
}

export interface CommandsInfo {
    system: string[],
}