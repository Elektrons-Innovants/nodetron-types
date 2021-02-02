import { Kick } from '../enum'

export interface HardwareInfo {
    id: number,
    infrared: boolean,
    kick: Kick,
}
