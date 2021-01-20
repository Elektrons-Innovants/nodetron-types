import { ActionSchema, ServiceBroker } from 'moleculer'

import { Task } from '../task'

export default abstract class Action implements Task {
    public abstract name: string;

    static declaration: ActionSchema;

    public abstract compute(broker: ServiceBroker): boolean;
}
