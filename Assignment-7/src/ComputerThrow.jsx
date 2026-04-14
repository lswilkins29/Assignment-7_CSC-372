import { useState, useEffect } from 'react';
import './ComputerThrow.css';

const ComputerThrow = ({ computerChoice, isAnimating }) => {
  const [currentImage, setCurrentImage] = useState('question-mark');

  useEffect(() => {
    if (isAnimating) {
      const throws = ['rock', 'paper', 'scissors'];
      let index = 0;
      const interval = setInterval(() => {
        setCurrentImage(throws[index]);
        index = (index + 1) % 3;
      }, 500);

      const timeout = setTimeout(() => {
        clearInterval(interval);
        setCurrentImage(computerChoice);
      }, 3000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    } else {
      setCurrentImage(computerChoice || 'question-mark');
    }
  }, [isAnimating, computerChoice]);

  return (
    <div className="computer-throw">
      <h2>Computer:</h2>
      <img
        src={`/images/${currentImage}.PNG`}
        alt={currentImage === 'question-mark' ? 'Thinking' : currentImage}
        className="throw-image"
      />
    </div>
  );
};

export default ComputerThrow;