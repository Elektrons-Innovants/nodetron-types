import { Kick } from '../data/enum'

export interface MoveToMessage {
    id: number,
    target: {
        x: number,
        y: number,
    },
    orientation: number,
    spin: boolean,
    power: number,
    kick: Kick,
}
