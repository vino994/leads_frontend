import { useEffect, useState } from "react";

function AnalyticsCard({ used, limit }) {
  const [progress, setProgress] = useState(0);

  const percentage = Math.min(
    Math.round((used / limit) * 100 || 0),
    100
  );

  const radius = 70;
  const stroke = 12;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 2;
      if (start >= percentage) {
        start = percentage;
        clearInterval(interval);
      }
      setProgress(start);
    }, 15);

    return () => clearInterval(interval);
  }, [percentage]);

  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  return (
    <div className="bg-gradient-to-br from-indigo-500 to-blue-600 text-white p-6 rounded-3xl shadow-xl flex flex-col items-center justify-center">
      <h3 className="text-sm opacity-80 mb-6">Usage Progress</h3>

      <div className="relative">
        <svg height={radius * 2} width={radius * 2}>
          <circle
            stroke="rgba(255,255,255,0.2)"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="#ffffff"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className="transition-all duration-500"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-3xl font-bold">{progress}%</p>
          <p className="text-xs opacity-80">
            {used} / {limit}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsCard;