import { IPoint } from '@nodetron/math/Point2D'

export interface Status {
    infrared: boolean,
    kick: {
        flat: boolean,
        chip: boolean,
    },
}

export interface Robot {
    id: number,
    position: IPoint,
    orientation: number,
    status: Status,
}
