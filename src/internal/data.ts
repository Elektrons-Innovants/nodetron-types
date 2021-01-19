import Point from '@nodetron/math/Point2D'
import Circle from '@nodetron/math/Circle'

import { GameControllerEvent } from '../league/game-controller'
import { Color } from '../utils/utils'

import { Robot } from './robot'
import Constant from './constant'

/** ***************************
 *           Mobile           *
 **************************** */

export interface Ball {
    position: Point,
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
    centerMark: Circle,
    goal: Goal,
    penalty: Penalty,
}

/** ***************************
 *            Data            *
 **************************** */
export interface Data {
    field: Field,
    robots: {
        allies: Array<Robot>,
        opponents: Array<Robot>,
    },
    ball: Ball,
    color: Color,
    gameController: GameControllerEvent,
    constant: Constant,
}
