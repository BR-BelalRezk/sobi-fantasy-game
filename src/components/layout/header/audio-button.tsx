"use client";

import { useState } from "react";

export default function AudioButton() {
  const [active, setActive] = useState(false);

  const toggleAudio = () => {
    // Toggle the animation state
    setActive((prev) => !prev);

    // Find all videos in the DOM and unmute them
    const videos = document.querySelectorAll<HTMLVideoElement>("video");
    videos.forEach((v) => {
      v.muted = false;
      v.volume = 1;
      v.play().catch(() => {}); // ensure video plays
    });
  };

  return (
    <button
      onClick={toggleAudio}
      className="ml-10 flex items-center space-x-0.5"
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className={`indicator-line ${active ? "active" : ""}`}
          style={{ animationDelay: `${(index + 1) * 0.1}s` }}
        />
      ))}
    </button>
  );
}
