import { GameControllerEvent } from '../league/game-controller'
import { Color } from '../utils/utils'
import { Circle, Vector2D } from '../utils/math'

import { Robot } from './robot'

/** ***************************
 *           Mobile           *
 **************************** */

export interface Ball {
    position: Vector2D,
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
    updated: boolean,
    center: Circle,
    goal: {
        ally: Goal,
        opponent: Goal,
    },
    penalty: {
        ally: Penalty,
        opponent: Penalty,
    },
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
}
