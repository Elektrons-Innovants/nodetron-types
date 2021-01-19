import { ICircle } from '@nodetron/math/Circle'
import { IPoint } from '@nodetron/math/Point2D'

import { Color } from '../../utils/utils'

import { Robot } from './robot'

/** ***************************
 *           Mobile           *
 **************************** */

export interface Ball {
    position: IPoint,
    radius: number,
}

/** ***************************
 *            Field           *
 **************************** */
export interface Goal {
    width: number,
    depth: number,
}

export interface Penalty {
    width: number,
    depth: number,
}

export interface Field {
    length: number,
    width: number,
    boundaryWidth: number,
    centerMark: ICircle,
    goal: Goal,
    penalty: Penalty,
}

/** ***************************
 *            Data            *
 **************************** */
export interface Game {
    field: Field,
    robots: {
        allies: Array<Robot>,
        opponents: Array<Robot>,
    },
    ball: Ball,
    color: Color,
    radiusRobot: number,
}
