import { DIRECTION, GRID_SIZE } from './constants';

export const isOppositeDirection = (currentDirection, nextDirection) =>
  currentDirection.x + nextDirection.x === 0 &&
  currentDirection.y + nextDirection.y === 0;

export const createInitialSnake = () => {
  const center = Math.floor(GRID_SIZE / 2);
  return [
    { x: center, y: center },
    { x: center - 1, y: center },
    { x: center - 2, y: center },
  ];
};

export const createRandomFood = (snake) => {
  let foodPosition;

  do {
    foodPosition = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  } while (snake.some((segment) => segment.x === foodPosition.x && segment.y === foodPosition.y));

  return foodPosition;
};

export const getDirectionByKey = (key) => {
  const directionMap = {
    ArrowUp: DIRECTION.UP,
    ArrowDown: DIRECTION.DOWN,
    ArrowLeft: DIRECTION.LEFT,
    ArrowRight: DIRECTION.RIGHT,
    w: DIRECTION.UP,
    s: DIRECTION.DOWN,
    a: DIRECTION.LEFT,
    d: DIRECTION.RIGHT,
  };

  return directionMap[key] || directionMap[key.toLowerCase()];
};
