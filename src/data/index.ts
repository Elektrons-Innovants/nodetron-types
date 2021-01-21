import { ICircle } from '@nodetron/math/Circle'
import { IPoint } from '@nodetron/math/Point2D'

import { Kick, Color } from './enum'

/** ***************************
 *           Mobile           *
 **************************** */

export interface IBall {
    position: IPoint,
    radius: number,
}

export interface IRobot {
    id: number,
    position: IPoint,
    orientation: number,
    radius: number,
    infrared: boolean,
    kick: Kick,
}

/** ***************************
 *            Field           *
 **************************** */
export interface IFieldObject {
    width: number,
    depth: number,
}

export interface IField {
    length: number,
    width: number,
    boundaryWidth: number,
    centerMark: ICircle,
    goal: IFieldObject,
    penalty: IFieldObject,
}

/**
 * Data packet sent by Data services.
 * It contains all filter data.
 */
export interface DataMessage {
    field: IField,
    robots: {
        allies: Array<IRobot>,
        opponents: Array<IRobot>,
    },
    ball: IBall,
    color: Color,
}
