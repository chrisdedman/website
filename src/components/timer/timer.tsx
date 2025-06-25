import React, { useMemo, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';


export default function MyTimer() {
  const [width, height] = useWindowSize();

  const [inputMinutes, setInputMinutes] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [timerKey, setTimerKey] = useState(0);

  const duration = useMemo(() => inputMinutes * 60, [inputMinutes]);

  const colorsTime = useMemo(() => {
    return [
      duration / 2,
      duration / 3,
      duration / 4,
      0,
    ];
  }, [duration]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setInputMinutes(value);
      setIsComplete(false);
    }
  };

  const handleStart = () => {
    if (inputMinutes > 0) {
      setTimerKey(prev => prev + 1);
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setInputMinutes(0);
    setIsComplete(false);
    setTimerKey(prev => prev + 1);
  };

  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold mb-4">Deep Work Timer</h1>

      <div className="flex justify-center items-center space-x-4">
        <label htmlFor="minutes" className="text-lg">
          Minutes:
        </label>
        <input
          id="minutes"
          type="number"
          className="w-24 border-2 p-2 text-black text-center rounded"
          value={inputMinutes}
          onChange={handleInputChange}
          disabled={isRunning}
        />
        <button
          onClick={handleStart}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          disabled={isRunning || inputMinutes <= 0}
        >
          Start
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>

      <div className="flex justify-center mt-8">
        <CountdownCircleTimer
          key={timerKey}
          isPlaying={isRunning}
          duration={duration}
          size={280}
          strokeLinecap="round"
          strokeWidth={14}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={colorsTime}
          isSmoothColorTransition
          onComplete={() => {
            setIsRunning(false);
            setIsComplete(true);
            return { shouldRepeat: false };
          }}
        >
          {({ remainingTime }) => {
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;
            return (
              <div role="timer" aria-live="assertive">
                <p className="text-lg font-semibold mb-1">
                  {remainingTime === 0 ? 'Well Done!' : 'Deep Work Time'}
                </p>
                <p className="text-3xl font-bold">
                  {minutes}:{seconds < 10 ? '0' : ''}
                  {seconds}
                </p>
                <p className="text-sm">
                  {minutes > 0 ? 'minutes' : 'seconds'}
                </p>
              </div>
            );
          }}
        </CountdownCircleTimer>
        {isComplete && <Confetti width={width} height={height} />}
      </div>

      <p className="mt-4 text-lg">
        {isComplete ? 'Session complete ✅' : isRunning ? 'Running ⏳' : 'Not running'}
      </p>
    </div>
  );
}
