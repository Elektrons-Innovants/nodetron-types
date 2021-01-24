import { AbstractCircle } from '@nodetron/math/Circle'
import { AbstractPoint } from '@nodetron/math/Point2D'

import { Kick, Color } from '../enum'

/** ***************************
 *           Mobile           *
 **************************** */

export interface AbstractBall {
    position: AbstractPoint,
    radius: number,
}

export interface AbstractRobot {
    id: number,
    position: AbstractPoint,
    orientation: number,
    radius: number,
    infrared: boolean,
    kick: Kick,
}

/** ***************************
 *            Field           *
 **************************** */
export interface AbstractFieldObject {
    width: number,
    depth: number,
}

export interface AbstractField {
    length: number,
    width: number,
    boundaryWidth: number,
    centerMark: AbstractCircle,
    goal: AbstractFieldObject,
    penalty: AbstractFieldObject,
}

/**
 * World packet sent by Filter service.
 * It contains the world data where that robots evolves.
 */
export interface WorldMessage {
    field: AbstractField,
    robots: {
        allies: Array<AbstractRobot>,
        opponents: Array<AbstractRobot>,
    },
    ball: AbstractBall,
    color: Color,
}
