import React, { useEffect, useState, useCallback } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  
  const calculateTimeLeft = useCallback((): TimeLeft => {
    const difference = +targetDate - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
      {timeUnits.map((unit, index) => (
        <div 
          key={unit.label}
          className="glass-panel rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center transform transition-transform hover:scale-105 border-green-400/20"
        >
          <span className="text-3xl md:text-5xl font-bold text-white font-mono drop-shadow-sm">
            {unit.value < 10 ? `0${unit.value}` : unit.value}
          </span>
          <span className="text-xs md:text-sm uppercase tracking-widest text-brand-yellow mt-2 font-bold">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};