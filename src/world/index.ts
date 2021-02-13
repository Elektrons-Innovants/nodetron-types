import { AbstractCircle } from '@nodetron/math/circle'
import { AbstractPoint } from '@nodetron/math/point2D'

import { Kick, Color } from '../enum'
import { GameControllerEvent } from '../network/game-controller'

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
export interface AbstractFieldPart {
    width: number,
    depth: number,
}

export interface AbstractField {
    length: number,
    width: number,
    boundaryWidth: number,
    centerMark: AbstractCircle,
    goal: AbstractFieldPart,
    penalty: AbstractFieldPart,
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
    gameController: GameControllerEvent,
}
