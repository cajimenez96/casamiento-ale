import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2026-05-01T18:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id="clock">
      <div className="box">
        <div>
          <div className="time">{timeLeft.days}</div>
          <span>Days</span>
        </div>
      </div>
      <div className="box">
        <div>
          <div className="time">{timeLeft.hours.toString().padStart(2, '0')}</div>
          <span>Hours</span>
        </div>
      </div>
      <div className="box">
        <div>
          <div className="time">{timeLeft.minutes.toString().padStart(2, '0')}</div>
          <span>Mins</span>
        </div>
      </div>
      <div className="box">
        <div>
          <div className="time">{timeLeft.seconds.toString().padStart(2, '0')}</div>
          <span>Secs</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer; 