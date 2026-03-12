import { CONTROL_BUTTONS, DIRECTION } from '../utils/constants';

const ControlPad = ({ onDirection, disabled }) => (
  <section className="control-pad glass-panel" aria-label="Touch controls">
    <h3>Touch Controls</h3>
    <div className="pad-grid">
      {CONTROL_BUTTONS.map((button) => (
        <button
          key={button.direction}
          type="button"
          className="pad-button"
          onClick={() => onDirection(DIRECTION[button.direction])}
          disabled={disabled}
        >
          {button.label}
        </button>
      ))}
    </div>
  </section>
);

export default ControlPad;
