"use client";

import { useState } from "react";

export function DarkModeToggleDemo() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={`rounded-md p-4 transition-colors duration-300 ${
        dark ? "bg-[#121212] text-[#f2f2f2]" : "bg-white text-[#1a1a1a]"
      }`}
    >
      <button
        onClick={() => setDark((d) => !d)}
        className="rounded-md bg-[#2980b9] px-4 py-2 font-bold text-white"
      >
        Toggle dark mode
      </button>
      <div
        className={`mt-4 rounded-lg p-4 text-sm transition-colors duration-300 ${
          dark ? "bg-[#1e1e1e]" : "bg-[#f2f2f2]"
        }`}
      >
        This card&apos;s colors come from CSS variables
      </div>
    </div>
  );
}
