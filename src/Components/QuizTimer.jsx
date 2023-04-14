import React, { useState, useEffect } from 'react';

const QuizTimer = ({ minutes, onTimerComplete }) => {
  const [seconds, setSeconds] = useState(minutes * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      onTimerComplete();
    }
  }, [seconds, onTimerComplete]);

  const displayMinutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;

  return (
    <div>
      <p>Time remaining: {displayMinutes}:{displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds}</p>
    </div>
  );
};

export default QuizTimer;
