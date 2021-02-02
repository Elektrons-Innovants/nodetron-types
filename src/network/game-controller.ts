export interface GameControllerTeamInfo {
  name: string,
  score: number,
  goalie: number,
  cards: {
    yellow: {
      counter: number,
      times: Array<number>,
    },
    red: {
      counter: number,
    },
  },
  timeouts: {
    counter: number,
    time: number,
  },
}

/** Stage enum. */
// eslint-disable-next-line no-shadow
export enum Stage {
  NORMAL_FIRST_HALF_PRE = 0,
  NORMAL_FIRST_HALF = 1,
  NORMAL_HALF_TIME = 2,
  NORMAL_SECOND_HALF_PRE = 3,
  NORMAL_SECOND_HALF = 4,
  EXTRA_TIME_BREAK = 5,
  EXTRA_FIRST_HALF_PRE = 6,
  EXTRA_FIRST_HALF = 7,
  EXTRA_HALF_TIME = 8,
  EXTRA_SECOND_HALF_PRE = 9,
  EXTRA_SECOND_HALF = 10,
  PENALTY_SHOOTOUT_BREAK = 11,
  PENALTY_SHOOTOUT = 12,
  POST_GAME = 13
}

/** Command enum. */
// eslint-disable-next-line no-shadow
export enum Command {
  HALT = 0,
  STOP = 1,
  NORMAL_START = 2,
  FORCE_START = 3,
  PREPARE_KICKOFF_YELLOW = 4,
  PREPARE_KICKOFF_BLUE = 5,
  PREPARE_PENALTY_YELLOW = 6,
  PREPARE_PENALTY_BLUE = 7,
  DIRECT_FREE_YELLOW = 8,
  DIRECT_FREE_BLUE = 9,
  INDIRECT_FREE_YELLOW = 10,
  INDIRECT_FREE_BLUE = 11,
  TIMEOUT_YELLOW = 12,
  TIMEOUT_BLUE = 13,
  GOAL_YELLOW = 14,
  GOAL_BLUE = 15,
  BALL_PLACEMENT_YELLOW = 16,
  BALL_PLACEMENT_BLUE = 17
}

/** *******************************************
 *              GameController                *
 ******************************************** */
export interface GameControllerEvent {
  timestamp: number,
  stage: Stage,
  timeLeft?: number,
  command: {
    value: Command,
    counter: number,
    timestamp: number,
  },
  teams: {
    yellow: GameControllerTeamInfo,
    blue: GameControllerTeamInfo,
  },
  designatedPosition?: {
    x: number,
    y: number,
  } | null,
  blueTeamOnPositiveHalf?: boolean,
}
