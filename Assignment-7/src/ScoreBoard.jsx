import './ScoreBoard.css';

const ScoreBoard = ({ scores, onReset }) => {
  return (
    <div className="score-board">
      <h2>Score:</h2>
      <div className="scores">
        <p>Wins: {scores.wins}</p>
        <p>Losses: {scores.losses}</p>
        <p>Ties: {scores.ties}</p>
      </div>
      <button onClick={onReset} className="reset-button">Reset</button>
    </div>
  );
};

export default ScoreBoard;