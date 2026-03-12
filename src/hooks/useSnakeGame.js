import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  DIRECTION,
  INITIAL_SPEED,
  MIN_SPEED,
  SPEED_STEP,
  STORAGE_KEY,
} from '../utils/constants';
import {
  createInitialSnake,
  createRandomFood,
  getDirectionByKey,
  isOppositeDirection,
} from '../utils/gameUtils';

const loadHighScore = () => Number(localStorage.getItem(STORAGE_KEY) || 0);

export const useSnakeGame = () => {
  const [snake, setSnake] = useState(() => createInitialSnake());
  const [food, setFood] = useState(() => createRandomFood(createInitialSnake()));
  const [direction, setDirection] = useState(DIRECTION.RIGHT);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(loadHighScore);
  const [status, setStatus] = useState('idle');
  const [speed, setSpeed] = useState(INITIAL_SPEED);

  const directionRef = useRef(direction);
  const pendingDirectionRef = useRef(direction);

  const setNextDirection = useCallback(
    (nextDirection) => {
      if (!nextDirection || status === 'over') {
        return;
      }

      if (isOppositeDirection(directionRef.current, nextDirection)) {
        return;
      }

      pendingDirectionRef.current = nextDirection;
    },
    [status],
  );

  const resetGame = useCallback(() => {
    const initialSnake = createInitialSnake();
    setSnake(initialSnake);
    setFood(createRandomFood(initialSnake));
    setDirection(DIRECTION.RIGHT);
    directionRef.current = DIRECTION.RIGHT;
    pendingDirectionRef.current = DIRECTION.RIGHT;
    setScore(0);
    setSpeed(INITIAL_SPEED);
    setStatus('running');
  }, []);

  const togglePause = useCallback(() => {
    setStatus((currentStatus) =>
      currentStatus === 'running'
        ? 'paused'
        : currentStatus === 'paused'
          ? 'running'
          : currentStatus,
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === ' ') {
        event.preventDefault();
        if (status === 'idle') {
          resetGame();
        } else {
          togglePause();
        }
        return;
      }

      if (event.key.toLowerCase() === 'r') {
        resetGame();
        return;
      }

      const keyboardDirection = getDirectionByKey(event.key);
      if (keyboardDirection) {
        setNextDirection(keyboardDirection);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [resetGame, setNextDirection, status, togglePause]);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem(STORAGE_KEY, String(score));
    }
  }, [highScore, score]);

  useEffect(() => {
    if (status !== 'running') {
      return undefined;
    }

    const tick = window.setInterval(() => {
      setSnake((currentSnake) => {
        const nextDirection = pendingDirectionRef.current;
        directionRef.current = nextDirection;
        setDirection(nextDirection);

        const nextHead = {
          x: currentSnake[0].x + nextDirection.x,
          y: currentSnake[0].y + nextDirection.y,
        };

        const hitWall =
          nextHead.x < 0 ||
          nextHead.x >= 18 ||
          nextHead.y < 0 ||
          nextHead.y >= 18;

        const hitSelf = currentSnake.some(
          (segment) => segment.x === nextHead.x && segment.y === nextHead.y,
        );

        if (hitWall || hitSelf) {
          setStatus('over');
          return currentSnake;
        }

        const hasEatenFood = nextHead.x === food.x && nextHead.y === food.y;
        const grownSnake = [nextHead, ...currentSnake];

        if (hasEatenFood) {
          setScore((value) => value + 10);
          setSpeed((value) => Math.max(MIN_SPEED, value - SPEED_STEP));
          setFood(createRandomFood(grownSnake));
          return grownSnake;
        }

        grownSnake.pop();
        return grownSnake;
      });
    }, speed);

    return () => window.clearInterval(tick);
  }, [food.x, food.y, speed, status]);

  const gameMetrics = useMemo(
    () => ({ score, highScore, speed, status, direction }),
    [direction, highScore, score, speed, status],
  );

  return {
    snake,
    food,
    gameMetrics,
    resetGame,
    togglePause,
    setNextDirection,
    setStatus,
  };
};
