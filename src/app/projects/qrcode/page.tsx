"use client"
import React, { useState } from "react";
import Menu from "@/components/navigation";
import Footer from "@/components/footer";
import { QRCodeCanvas } from 'qrcode.react';

export default function Page() {
  const [url, setUrl] = useState("");
  const [submittedUrl, setSubmittedUrl] = useState("");

  const handleInputChange = (event: any) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSubmittedUrl(url);
  };

  return (
    <div className="h-screen p-4 lg:p-8 mt-16">
      <Menu />
      <div className="p-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">
          <a href="/projects" className="underline">Projects</a>{" > "}QR Code
        </h5>
        <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />

        <form onSubmit={handleSubmit} className="my-4">
          <label htmlFor="urlInput" className="block text-lg font-medium mb-2">
            Enter URL:
          </label>
          <input
            type="text"
            id="urlInput"
            placeholder="Enter URL to generate QR code"
            value={url}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mb-2 text-black"
          />
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
