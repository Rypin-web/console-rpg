import {checkFlag} from "../../../core/utils";
import {getState} from "../../../core/state";

export async function use(id: string): Promise<void> {
    await checkFlag('playerIsCreated', false, [['Персонаж еще не создан. Команда невозможна', 'error']])

    const inventory = getState('player')!.inv
    const [item] = inventory.filter((e) => (e.id === id))

}