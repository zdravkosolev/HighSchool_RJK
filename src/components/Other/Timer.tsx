import React, { useState, useEffect, useCallback } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [calculateTimeLeft]);

  return (
    <div>
      <div className="flex gap-7">
        <div>
          <p>Денови</p>
          <p className="text-6xl">{timeLeft.days}</p>
        </div>
        <div>
          <p>Саати</p>
          <p className="text-6xl">{timeLeft.hours}</p>
        </div>
        <div>
          <p>Минути</p>
          <p className="text-6xl">{timeLeft.minutes}</p>
        </div>
        <div className="center">
          <p>Секунди</p>
          <p className="text-6xl">{timeLeft.seconds}</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
