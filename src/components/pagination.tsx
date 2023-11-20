import React from "react";
import { ForwardIcon, BackwardIcon } from '@heroicons/react/24/outline';

export default function Pagination({ forward, backword }: { forward: string, backword: string }) {
  return (
    <div className="flex justify-between items-center mt-5 mb-5">
      {/* <!-- Previous Button --> */}
      <a href={backword} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700">
        <BackwardIcon className="w-5 h-5" />
      </a>

      {/* <!-- Next Button --> */}
      <a href={forward} className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700">
        <ForwardIcon className="w-5 h-5" />
      </a>
    </div>
  )
}