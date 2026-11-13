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
            size={240}
            strokeWidth={8}
            trailStrokeWidth={8}
            strokeLinecap="round"
            // This library types its colors as hex literals, so the theme
            // tokens cannot be handed to it. The orange is picked to read
            // against both the light and the dark background.
            colors="#ea580c"
            trailColor="#94a3b8"
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
                <p className="mt-2 font-display text-[1.75rem] font-semibold tabular-nums text-ink">
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
                aria-pressed={minutes === preset}
                className={`min-h-11 rounded-full border px-4 font-medium tabular-nums transition-opacity hover:opacity-85 disabled:opacity-40 ${
                  minutes === preset ? 'border-btn bg-btn text-btn-ink' : 'border-edge text-ink'
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
            className="mt-2 w-28 min-h-12 rounded-xl border border-edge bg-surface px-4 text-ink tabular-nums disabled:opacity-40"
          />

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => {
                setTimerKey((key) => key + 1);
                setIsComplete(false);
                setIsRunning(true);
              }}
              disabled={isRunning || minutes <= 0}
              className="min-h-12 rounded-xl bg-btn px-5 font-medium text-btn-ink transition-opacity hover:opacity-85 disabled:opacity-40"
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
              className="min-h-12 rounded-xl border border-edge px-5 font-medium text-ink transition-opacity hover:opacity-85"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-baseline justify-between gap-4 border-t border-rule pt-4">
        <p className="text-ink-muted">
          {sessions} focus {sessions === 1 ? 'block' : 'blocks'} completed
        </p>
        <button
          type="button"
          onClick={() => setSessions(0)}
          className="min-h-11 font-medium text-accent underline-offset-4 hover:underline"
        >
          Clear history
        </button>
      </div>
    </div>
  );
}
