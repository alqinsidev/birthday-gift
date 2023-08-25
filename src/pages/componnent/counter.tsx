import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [countdown, setCountdown] = useState<number>(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeRemaining() {
    const targetDate = new Date('2023-08-28T00:00:00+07:00');
    const currentDate = new Date();
    const timeRemaining = targetDate.getTime() - currentDate.getTime();

    return Math.max(0, timeRemaining);
  }

  function formatTime(ms: number) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));

    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>Time remaining until August 28, 2023:</p>
      <p>{formatTime(countdown)}</p>
    </div>
  );
};

export default CountdownTimer;
