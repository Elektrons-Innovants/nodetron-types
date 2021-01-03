/** *******************************************
 *                 Detection                  *
 ******************************************** */
export interface VisionDetectionRobot {
  confidence: number,
  id?: number | null,
  height?: number | null,
  position: {
    x: number,
    y: number,
    orientation?: number | null,
    pixelX: number,
    pixelY: number,
  },
}

export interface VisionDetectionBall {
  confidence: number,
  area?: number | null,
  position: {
    x: number,
    y: number,
    z?: number | null,
    pixelX: number,
    pixelY: number,
  },
}

export interface VisionDetectionFrame {
  number: number,
  tCapture: number,
  tSent: number,
  cameraId: number,
  balls: Array<VisionDetectionBall>,
  robots: {
    allies: Array<VisionDetectionRobot>,
    opponents: Array<VisionDetectionRobot>,
  },
}

/** *******************************************
 *                  Geometry                  *
 ******************************************** */

// Camera Calibration
export interface VisionGeometryCameraCalibration {
  cameraId: number,
  focalLength: number,
  principalPoint: {
    x: number,
    y: number,
  },
  distortion: number,
  q0: number,
  q1: number,
  q2: number,
  q3: number,
  tx: number,
  ty: number,
  tz: number,
  derivedCameraWorld: {
    tx?: number | null,
    ty?: number | null,
    tz?: number | null,
  },
}

// Field
export interface VisionFieldLineSegment {
  name: string,
  p1: {
    x: number,
    y: number,
  },
  p2: {
    x: number,
    y: number,
  },
  thickness: number,
}

export interface VisionFieldCircularArc {
  name: string,
  center: {
    x: number,
    y: number,
  },
  radius: number,
  a1: number,
  a2: number,
  thickness: number,
}

export interface VisionGeometryFieldSize {
  length: number,
  width: number,
  lines: Array<VisionFieldLineSegment>,
  arcs: Array<VisionFieldCircularArc>,
  boundaryWidth: number,
  goal: {
    width: number,
    depth: number,
  },
}

export interface VisionGeometry {
  field: VisionGeometryFieldSize | null,
  calibrations: Array<VisionGeometryCameraCalibration>,
}

/** *******************************************
 *               Vision Packet                *
 ******************************************** */
export interface Vision {
  detection: VisionDetectionFrame | null,
  geometry: VisionGeometry | null,
}

