export interface Control {
  id: number,
  yellow: boolean,
  dribbler: boolean,
  kick: boolean,
  chipKick: boolean,
  power: number,
  velocity: {
    normal: number,
    angular: number,
    tangent: number,
  },
}
