export interface StopPacket {
  id: number,
}

export interface MoveToPacket {
  id: number,
  target: {
    x: number,
    y: number,
  },
  orientation: number,
  dribble: boolean,
  power: number,
  kick: boolean,
  chipkick: boolean,
}
