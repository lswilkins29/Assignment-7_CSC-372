import './PlayerThrow.css';

const PlayerThrow = ({ onSelect, selected }) => {
  const throws = ['rock', 'paper', 'scissors'];

  return (
    <div className="player-throw">
      <h2>Choose your throw:</h2>
      <div className="throw-options">
        {throws.map(throwType => (
          <img
            key={throwType}
            src={`/images/${throwType}.PNG`}
            alt={throwType}
            className={`throw-image ${selected === throwType ? 'selected' : ''}`}
            onClick={() => onSelect(throwType)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onSelect(throwType);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayerThrow;