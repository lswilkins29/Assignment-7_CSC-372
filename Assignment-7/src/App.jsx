import { useState } from 'react';
import './App.css';
import PlayerThrow from './PlayerThrow';
import ComputerThrow from './ComputerThrow';
import ResultDisplay from './ResultDisplay';
import ScoreBoard from './ScoreBoard';

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [outcome, setOutcome] = useState(null);
  const [scores, setScores] = useState({ wins: 0, losses: 0, ties: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomThrow = () => {
    const throws = ['rock', 'paper', 'scissors'];
    return throws[Math.floor(Math.random() * 3)];
  };

  const determineWinner = (player, computer) => {
    if (player === computer) return 'tie';
    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'scissors' && computer === 'paper') ||
      (player === 'paper' && computer === 'rock')
    ) {
      return 'win';
    }
    return 'lose';
  };

  const handlePlayerSelect = (throwType) => {
    if (isAnimating) return; // Prevent selection during animation
    setPlayerChoice(throwType);
    setIsAnimating(true);
    setOutcome(null);

    setTimeout(() => {
      const compChoice = getRandomThrow();
      setComputerChoice(compChoice);
      const result = determineWinner(throwType, compChoice);
      setOutcome(result);
      setScores(prev => ({
        ...prev,
        [result === 'win' ? 'wins' : result === 'lose' ? 'losses' : 'ties']: prev[result === 'win' ? 'wins' : result === 'lose' ? 'losses' : 'ties'] + 1
      }));
      setIsAnimating(false);
    }, 3000);
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setOutcome(null);
    setScores({ wins: 0, losses: 0, ties: 0 });
    setIsAnimating(false);
  };

  return (
    <div className="app">
      <h1>Rock-Paper-Scissors</h1>
      <ScoreBoard scores={scores} onReset={resetGame} />
      <PlayerThrow onSelect={handlePlayerSelect} selected={playerChoice} />
      <ComputerThrow computerChoice={computerChoice} isAnimating={isAnimating} />
      <ResultDisplay outcome={outcome} />
    </div>
  );
}

export default App;
