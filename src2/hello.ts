import {registryCommand} from "./core/parser";

export function hello(args:string) {
    console.log('hello' + args)
}

registryCommand('system', 'hello', hello, true)