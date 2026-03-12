export const GRID_SIZE = 18;
export const INITIAL_SPEED = 150;
export const MIN_SPEED = 80;
export const SPEED_STEP = 3;
export const STORAGE_KEY = 'bekish-snake-high-score';

export const DIRECTION = {
  UP: { x: 0, y: -1 },
  DOWN: { x: 0, y: 1 },
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: 1, y: 0 },
};

export const CONTROL_BUTTONS = [
  { label: '↑', direction: 'UP' },
  { label: '←', direction: 'LEFT' },
  { label: '↓', direction: 'DOWN' },
  { label: '→', direction: 'RIGHT' },
];
