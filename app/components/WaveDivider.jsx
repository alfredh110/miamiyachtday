import React from "react";

export default function WaveDivider({ flip = false, color = "#5EE6E6", height = 48 }) {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        lineHeight: 0,
        background: "transparent",
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        style={{
          display: "block",
          width: "100%",
          height: height,
          transform: flip ? "scaleY(-1)" : undefined,
        }}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
          fill={color}
          opacity="0.95"
        />
      </svg>
    </div>
  );
}
