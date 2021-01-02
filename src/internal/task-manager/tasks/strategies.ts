import { ActionSchema, ServiceBroker } from 'moleculer'

import { Task } from '../task'

export default abstract class Strategies implements Task {
    abstract name: string;

    static declaration: ActionSchema;

    abstract compute(broker: ServiceBroker): boolean;
}
