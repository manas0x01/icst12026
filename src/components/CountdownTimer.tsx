
import { useState, useEffect } from 'react';

// Target date: May 10, 2026 at midnight IST (UTC+5:30) - Conference starts May 10-12 (Tentative)
const TARGET_DATE = new Date('2026-05-10T00:00:00+05:30').getTime();

const calculateTimeLeft = () => {
  const now = new Date().getTime();
  const difference = TARGET_DATE - now;

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  }
  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

const CountdownTimer = () => {
  // Initialize with calculated values immediately instead of zeros
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-slate-50 via-gray-50 to-slate-100 py-16 relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-rose-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-slate-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Conference Countdown</h2>
        <p className="text-gray-600 mb-8">10-12 May, 2026 (Tentative)</p>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 min-w-[120px] border border-slate-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-br from-slate-800 to-slate-600 bg-clip-text text-transparent">{timeLeft.days}</div>
            <div className="text-gray-600 font-medium">Days</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 min-w-[120px] border border-rose-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-br from-rose-500 to-pink-500 bg-clip-text text-transparent">{timeLeft.hours}</div>
            <div className="text-gray-600 font-medium">Hours</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 min-w-[120px] border border-slate-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-br from-slate-800 to-slate-600 bg-clip-text text-transparent">{timeLeft.minutes}</div>
            <div className="text-gray-600 font-medium">Minutes</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 min-w-[120px] border border-rose-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-br from-rose-500 to-pink-500 bg-clip-text text-transparent">{timeLeft.seconds}</div>
            <div className="text-gray-600 font-medium">Seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
