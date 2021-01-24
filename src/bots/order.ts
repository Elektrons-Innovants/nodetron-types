import { Kick } from '../enum'

export interface OrderMessage {
    id: number,
    yellow: boolean,
    spin: boolean,
    kick: Kick,
    power: number,
    velocity: {
      normal: number,
      angular: number,
      tangent: number,
    },
}
