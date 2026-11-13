'use client';

import { QRCodeCanvas } from 'qrcode.react';
import { useCallback, useState } from 'react';

const URL_PATTERN = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i;

export default function QrGenerator() {
  const [url, setUrl] = useState('');
  const [submitted, setSubmitted] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const value = url.trim();
      if (!value || !URL_PATTERN.test(value)) {
        setError('Enter a valid URL, for example example.com or https://example.com');
        setSubmitted('');
        return;
      }
      setError('');
      setSubmitted(/^https?:\/\//i.test(value) ? value : `https://${value}`);
    },
    [url],
  );

  return (
    <div className="not-prose">
      <form onSubmit={handleSubmit} noValidate>
        <label className="label block" htmlFor="url-input">
          URL
        </label>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <input
            id="url-input"
            type="text"
            inputMode="url"
            value={url}
            placeholder="example.com"
            aria-describedby={error ? 'url-error' : undefined}
            aria-invalid={error ? true : undefined}
            onChange={(event) => {
              setUrl(event.target.value);
              setError('');
              setSubmitted('');
            }}
            className="w-full min-h-12 rounded-xl border border-edge bg-surface px-4 text-ink placeholder:text-ink-faint sm:max-w-sm"
          />
          <button
            type="submit"
            className="min-h-12 rounded-xl bg-btn px-5 font-medium text-btn-ink transition-opacity hover:opacity-85 disabled:opacity-40"
          >
            Generate
          </button>
        </div>
        <p
          id="url-error"
          role="alert"
          className="mt-2 min-h-[1.5em] text-[0.9375rem] text-accent"
        >
          {error}
        </p>
      </form>

      {submitted ? (
        <figure className="mt-6 inline-block rounded-2xl border border-rule bg-white p-5 shadow-card">
          <QRCodeCanvas value={submitted} size={200} marginSize={2} level="H" />
          <figcaption className="mt-3 max-w-[200px] break-all text-sm text-slate-600">
            {submitted}
          </figcaption>
        </figure>
      ) : null}
    </div>
  );
}
