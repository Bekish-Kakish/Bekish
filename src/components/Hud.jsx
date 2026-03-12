const Hud = ({ score, highScore, status, onStart, onPause, onRestart }) => (
  <section className="hud glass-panel">
    <div>
      <p className="meta-label">Score</p>
      <p className="meta-value">{score}</p>
    </div>
    <div>
      <p className="meta-label">High Score</p>
      <p className="meta-value neon">{highScore}</p>
    </div>
    <div className="hud-actions">
      <button className="action-button primary" onClick={onStart}>
        {status === 'idle' ? 'Start Game' : 'Resume'}
      </button>
      <button className="action-button" onClick={onPause}>
        {status === 'running' ? 'Pause' : 'Unpause'}
      </button>
      <button className="action-button danger" onClick={onRestart}>
        Restart
      </button>
    </div>
  </section>
);

export default Hud;
