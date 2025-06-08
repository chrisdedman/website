"use client"

import React, { useState, useCallback } from "react";
import Menu from "@/components/navigation";
import Footer from "@/components/footer";
import { QRCodeCanvas } from 'qrcode.react';

export default function Page() {
  const [url, setUrl]                   = useState("");
  const [submittedUrl, setSubmittedUrl] = useState("");
  const [error, setError]               = useState<string>("");

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
    setSubmittedUrl("");
    setError("");
  }, []);

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (!url) {
        setError("Please enter a valid URL.");
        return;
      }

      // Validate URL format
      const urlPattern = new RegExp(/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/i)

      if (!urlPattern.test(url)) {
        setError("Please enter a valid URL.");
        return;
      }

      setSubmittedUrl(url);
      setError("");

    } catch (error) {
      setError("An error occurred while generating the QR code.");
      console.error(error);
      return;
    }
  }, [url]);

  return (
    <div className="min-h-screen flex-col p-4 lg:p-8 mt-16">
      <Menu />
      <div className="p-4 max-w-6xl mx-auto flex-grow">
        <h5 className="mb-2 text-2xl font tracking-tight">
          <a href="/projects" className="underline">Projects</a>{" > "}QR Code
        </h5>

        <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />

        <form onSubmit={handleSubmit} className="my-4">
          <label htmlFor="urlInput" className="block text-lg font-medium mb-2">
            Enter your URL in the following box to generate your QR Code:
          </label>
          <input
            type="text"
            required
            id="urlInput"
            placeholder="Enter URL to generate QR code"
            value={url}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mb-2 text-black"
          />
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Generate QR Code
          </button>
        </form>

        <div className="flex justify-center my-4">
          {submittedUrl && (
            <QRCodeCanvas
              value={submittedUrl}
              size={200}
              marginSize={10}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
