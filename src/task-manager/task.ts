import { ServiceBroker } from 'moleculer'

/** ************************
 *          Task           *
 ************************* */
export interface Task {
    compute(broker: ServiceBroker): boolean,
}

/** ************************
 *      Task Manager       *
 ************************* */
export interface TaskManager<T extends Task> {
    register(id: number | number[], elt: T): void,
    computeAll(broker: ServiceBroker): void,
}
