import './ResultDisplay.css';

const ResultDisplay = ({ outcome }) => {
  if (!outcome) return null;

  let message = '';
  switch (outcome) {
    case 'win':
      message = 'You win!';
      break;
    case 'lose':
      message = 'You lose!';
      break;
    case 'tie':
      message = "It's a tie!";
      break;
    default:
      message = '';
  }

  return (
    <div className="result-display">
      <h2>Result:</h2>
      <p className={`result-message ${outcome}`}>{message}</p>
    </div>
  );
};

export default ResultDisplay;