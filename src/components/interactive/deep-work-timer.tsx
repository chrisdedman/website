'use client';

import { useMemo, useState, useSyncExternalStore } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import {
  getServerSnapshot,
  getSnapshot,
  setSessions,
  subscribe,
} from '@/lib/session-store';

const PRESETS = [15, 25, 50, 90];

function format(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const parts = [];
  if (hours > 0) parts.push(`${hours}h`);
  if (hours > 0 || minutes > 0) parts.push(`${String(minutes).padStart(2, '0')}m`);
  parts.push(`${String(seconds).padStart(2, '0')}s`);
  return parts.join(' ');
}

export default function DeepWorkTimer() {
  const [minutes, setMinutes] = useState(25);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [timerKey, setTimerKey] = useState(0);
  const sessions = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const duration = useMemo(() => minutes * 60, [minutes]);

  return (
    <div className="not-prose">
      <div className="grid gap-10 sm:grid-cols-[auto_1fr] sm:items-center">
        <div className="mx-auto sm:mx-0">
          <CountdownCircleTimer
            key={timerKey}
            isPlaying={isRunning}
            duration={duration}
            size={230}
            strokeWidth={2}
            trailStrokeWidth={2}
            strokeLinecap="butt"
            // This library types its colors as hex literals, so the theme
            // tokens cannot be handed to it. These two are mid-tones chosen to
            // stay legible against both the light and the dark background.
            colors="#c25a2c"
            trailColor="#918b7e"
            onComplete={() => {
              setIsRunning(false);
              setIsComplete(true);
              setSessions(getSnapshot() + 1);
              return { shouldRepeat: false };
            }}
          >
            {({ remainingTime }) => (
              <div className="text-center" role="timer" aria-live="polite">
                <p className="label">
                  {isRunning ? 'running' : isComplete ? 'complete' : 'ready'}
                </p>
                <p className="mt-2 font-mono text-2xl tabular-nums text-ink">
                  {format(remainingTime)}
                </p>
              </div>
            )}
          </CountdownCircleTimer>
        </div>

        <div>
          <p className="label">Duration</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {PRESETS.map((preset) => (
              <button
                key={preset}
                type="button"
                disabled={isRunning}
                onClick={() => {
                  setMinutes(preset);
                  setIsComplete(false);
                  setTimerKey((key) => key + 1);
                }}
                className={`border px-3 py-1.5 font-mono text-[0.75rem] transition-colors disabled:opacity-40 ${
                  minutes === preset
                    ? 'border-ink bg-ink text-paper'
                    : 'border-rule text-ink hover:border-ink'
                }`}
              >
                {preset}m
              </button>
            ))}
          </div>

          <label className="label mt-6 block" htmlFor="minutes">
            Custom minutes
          </label>
          <input
            id="minutes"
            type="number"
            min={1}
            max={240}
            value={minutes}
            disabled={isRunning}
            onChange={(event) => {
              const value = Number.parseInt(event.target.value, 10);
              if (Number.isFinite(value) && value > 0) {
                setMinutes(value);
                setIsComplete(false);
                setTimerKey((key) => key + 1);
              }
            }}
            className="mt-2 w-28 border border-rule bg-paper-raised px-3 py-2 font-mono text-sm text-ink disabled:opacity-40"
          />

          <div className="mt-6 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => {
                setTimerKey((key) => key + 1);
                setIsComplete(false);
                setIsRunning(true);
              }}
              disabled={isRunning || minutes <= 0}
              className="border border-ink bg-ink px-4 py-2 font-mono text-[0.75rem] uppercase tracking-[0.12em] text-paper transition-opacity disabled:opacity-40"
            >
              Start
            </button>
            <button
              type="button"
              onClick={() => {
                setIsRunning(false);
                setIsComplete(false);
                setTimerKey((key) => key + 1);
              }}
              className="border border-rule px-4 py-2 font-mono text-[0.75rem] uppercase tracking-[0.12em] text-ink transition-colors hover:border-ink"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-baseline justify-between gap-4 border-t border-rule pt-4">
        <p className="label">
          {sessions} focus {sessions === 1 ? 'block' : 'blocks'} completed
        </p>
        <button
          type="button"
          onClick={() => setSessions(0)}
          className="label underline decoration-rule underline-offset-4 transition-colors hover:text-accent"
        >
          Clear history
        </button>
      </div>
    </div>
  );
}
