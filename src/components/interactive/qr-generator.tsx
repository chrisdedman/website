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
      setSubmitted(value);
    },
    [url],
  );

  return (
    <div className="not-prose">
      <form onSubmit={handleSubmit} noValidate>
        <label className="label block" htmlFor="url-input">
          URL
        </label>
        <div className="mt-2 flex flex-col gap-2 sm:flex-row">
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
            className="w-full border border-rule bg-paper-raised px-3 py-2 font-mono text-sm text-ink placeholder:text-ink-faint sm:max-w-sm"
          />
          <button
            type="submit"
            className="border border-ink bg-ink px-4 py-2 font-mono text-[0.75rem] uppercase tracking-[0.12em] text-paper"
          >
            Generate
          </button>
        </div>
        <p
          id="url-error"
          role="alert"
          className="mt-2 min-h-[1.2em] font-mono text-[0.75rem] leading-tight text-accent"
        >
          {error}
        </p>
      </form>

      {submitted ? (
        <figure className="mt-8 inline-block border border-rule bg-white p-4">
          <QRCodeCanvas value={submitted} size={200} marginSize={2} level="H" />
          <figcaption className="label mt-3 max-w-[200px] break-all text-ink-muted">
            {submitted}
          </figcaption>
        </figure>
      ) : null}
    </div>
  );
}
