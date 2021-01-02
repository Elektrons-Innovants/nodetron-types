export interface HardwareInfo {
    id: number,
    infrared: boolean,
    kick: {
        flat: boolean,
        chip: boolean,
    },
}
