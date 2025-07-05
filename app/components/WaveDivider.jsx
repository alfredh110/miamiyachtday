import React from "react";

export default function WaveDivider({ color = "#5EE6E6", opacity = 0.13, style = {} }) {
  return (
    <svg width="100%" height="70" viewBox="0 0 1440 70" fill="none" style={style}>
      <path
        d="M0 0 Q720 80 1440 0 V70 H0 V0Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
}
