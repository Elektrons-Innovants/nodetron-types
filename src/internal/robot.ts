import Point from '@nodetron/math/Point2D'

export interface Status {
    infrared: boolean,
    kick: {
        flat: boolean,
        chip: boolean,
    },
}

export interface Robot {
    id: number,
    position: Point,
    orientation: number,
    status: Status,
}
