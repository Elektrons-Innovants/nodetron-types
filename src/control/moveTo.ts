export interface MoveToMessage {
    id: number,
    target: {
        x: number,
        y: number,
    },
    orientation: number,
    spin: boolean,
    power: number,
    kick: boolean,
    chipkick: boolean,
}
