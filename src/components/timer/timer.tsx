import React, { useEffect, useState } from 'react';
import { CountdownCircleTimer } from
  'react-countdown-circle-timer'

export default function MyTimer() {
  const [inputMinutes, setInputMinutes] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const inputValue = parseInt(e.target.value, 10) || 0;
    setValue(inputValue);
    setIsRunning(true);
  };

  useEffect(() => {
    if (inputMinutes === 0) {
      setIsRunning(false);
    }
  }, [inputMinutes]
  );

  return (
    <div style={{ textAlign: 'center' }}>
      <div className="flex justify-center">
        <input
          className='w-24 border-2 mt-8 text-black text-center'
          type="number"
          placeholder='Minutes'
          onChange={(e) => handleInputChange(e, setInputMinutes)}
        />
      </div>

      <div className="flex justify-center mt-8">
        <CountdownCircleTimer
          isPlaying
          duration={inputMinutes * 60}
          size={300}
          strokeLinecap='round'
          strokeWidth={15}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[(inputMinutes * 60) / 2, (inputMinutes * 60) / 3, (inputMinutes * 60) / 4, 0]}
          isSmoothColorTransition={true}
          onComplete={() => setIsRunning(false)}
        >
          {({ remainingTime }) => {
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;
            return (
              <div role="timer" aria-live="assertive">
                <p>
                  {seconds + minutes === 0 ? 'Well Done' : 'Deep Work Time!'}
                </p>
                {minutes}:{seconds < 10 ? '0' : ''}{seconds}
                <p>
                  {minutes === 0 ? 'seconds' : 'minutes'}
                </p>
              </div>
            );
          }}
        </CountdownCircleTimer>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
    </div>
  );
}