export default interface OrderMessage {
    id: number,
    yellow: boolean,
    spin: boolean,
    kick: boolean,
    chipKick: boolean,
    power: number,
    velocity: {
      normal: number,
      angular: number,
      tangent: number,
    },
}
