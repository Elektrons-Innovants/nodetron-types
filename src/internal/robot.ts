import { Vector2D } from '../utils/math'

export interface Status {
    infrared: boolean,
    kick: {
        flat: boolean,
        chip: boolean,
    },
}

export interface Robot {
    id: number,
    position: Vector2D,
    orientation: number,
    status: Status,
}
