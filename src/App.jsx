import { useSnakeGame } from './hooks/useSnakeGame';
import { DIRECTION } from './utils/constants';
import GameBoard from './components/GameBoard';
import Hud from './components/Hud';
import ControlPad from './components/ControlPad';

const App = () => {
  const {
    snake,
    food,
    gameMetrics,
    resetGame,
    togglePause,
    setNextDirection,
    setStatus,
  } = useSnakeGame();

  const { score, highScore, status } = gameMetrics;

  const handleStart = () => {
    if (status === 'idle' || status === 'over') {
      resetGame();
      return;
    }

    if (status === 'paused') {
      setStatus('running');
    }
  };

  return (
    <main className="app-shell">
      <div className="aurora aurora-left" />
      <div className="aurora aurora-right" />
      <section className="hero">
        <p className="eyebrow">Bekish Interactive</p>
        <h1>
          Snake <span>Neon Edition</span>
        </h1>
        <p className="hero-copy">
          A premium cyberpunk mini-game experience with glassmorphism, responsive controls,
          high-score persistence, and fluid neon interactions.
        </p>
      </section>

      <Hud
        score={score}
        highScore={highScore}
        status={status}
        onStart={handleStart}
        onPause={togglePause}
        onRestart={resetGame}
      />

      <GameBoard snake={snake} food={food} status={status} />

      <ControlPad onDirection={setNextDirection} disabled={status === 'over' || status === 'idle'} />

      <footer className="footer-tip glass-panel">
        <span>Keyboard: arrows / WASD</span>
        <span>Space: pause • R: restart</span>
        <span>Status: {status.toUpperCase()}</span>
      </footer>
    </main>
  );
};

export default App;
