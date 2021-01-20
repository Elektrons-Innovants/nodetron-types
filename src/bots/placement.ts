export interface RobotPlacement {
    id: number,
    yellow: boolean,
    x: number,
    y: number,
    orientation: number,
    turnOn: boolean,
}

export interface PlacementMessage {
    ball?: {
        x: number,
        y: number,
        vx: number,
        vy: number,
    },
    robots: {
        yellow ?: Array<RobotPlacement>,
        blue ?: Array<RobotPlacement>,
    },
}
