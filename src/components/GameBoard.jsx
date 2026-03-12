import { GRID_SIZE } from '../utils/constants';

const GameBoard = ({ snake, food, status }) => (
  <div className="board-shell glass-panel">
    <div
      className="game-board"
      style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))` }}
      aria-label="Snake game board"
      role="img"
    >
      {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
        const x = index % GRID_SIZE;
        const y = Math.floor(index / GRID_SIZE);
        const snakeIndex = snake.findIndex((segment) => segment.x === x && segment.y === y);
        const isSnakeHead = snakeIndex === 0;
        const isSnakeBody = snakeIndex > 0;
        const isFood = food.x === x && food.y === y;

        return (
          <div
            key={`${x}-${y}`}
            className={`cell ${
              isSnakeHead ? 'snake-head' : isSnakeBody ? 'snake-body' : isFood ? 'food' : ''
            }`}
          />
        );
      })}
    </div>
    {(status === 'idle' || status === 'paused' || status === 'over') && (
      <div className="board-overlay">
        {status === 'idle' && <p>Press Start to begin your neon run.</p>}
        {status === 'paused' && <p>Paused. Enter the flow whenever you are ready.</p>}
        {status === 'over' && <p>Game Over. Restart and chase a new high score.</p>}
      </div>
    )}
  </div>
);

export default GameBoard;
