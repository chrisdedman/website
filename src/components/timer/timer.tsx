import React, { useEffect, useMemo, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';


export default function MyTimer() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [width, height] = useWindowSize();
  const [sessionCount, setSessionCount] = useState(0);

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
    ] as [number, number, number, number];
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

  useEffect(() => {
    const storedCount = localStorage.getItem("sessionCount");
    if (storedCount !== null) {
      setSessionCount(Number(storedCount));
    }
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem("sessionCount", String(sessionCount));
    }
  }, [sessionCount, hasLoaded]);

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
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>

      {isComplete && <Confetti width={width} height={height} />}

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
            setSessionCount((count) => count + 1);
            return { shouldRepeat: false };
          }}
        >
          {({ remainingTime }) => {
            const hours = Math.floor(remainingTime / 3600)
            const minutes = Math.floor((remainingTime % 3600) / 60);
            const seconds = remainingTime % 60;
            return (
              <div role="timer" aria-live="assertive">
                <p className="text-lg font-semibold mb-1">
                  {isRunning ? 'Deep Work Running' : remainingTime === 0 && isComplete ? 'Well Done!' : 'Ready to Start?'}
                </p>
                <p
                  key={remainingTime}
                  className={`text-3xl font-bold ${remainingTime <= 59 ? 'tick' : ''}`}
                >
                  {hours > 0 && `${hours}h`}
                  {(minutes > 0 || hours > 0) && `${minutes.toString().padStart(2, '0')}m`}
                  {`${seconds.toString().padStart(2, '0')}s`}
                </p>

                <p className="text-sm text-gray-600">
                  {isRunning ? 'Remaining time' : ''}
                </p>

                {isRunning ? <span className="inline-block spin">⏳</span> : '⏳'}
              </div>
            );
          }}
        </CountdownCircleTimer>
      </div>

      <p className="mt-4 text-lg">
        {isComplete ? 'Session complete ✅' : isRunning ? 'Session Activated' : 'Session Not Activated'}
      </p>

      <hr className="h-px my-8 bg-black border-0 separator" />

      <p className="text-sm text-gray-500 mt-2">
        Session {sessionCount} {sessionCount === 1 ? 'focus block' : 'focus blocks'} completed
      </p>

      <button onClick={() => {
        setSessionCount(0);
        localStorage.removeItem("sessionCount");
      }}
        className='mt-4 text-sm text-blue-500 underline'
      >Clear Session History</button>

    </div>
  );
}
