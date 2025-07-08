import React from "react";

// Generic modal wrapper for reuse (optional, if you want to abstract modal styling)
export default function Modal({ children, onClose }) {
  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button style={closeButtonStyle} onClick={onClose} aria-label="Close">&times;</button>
        {children}
      </div>
    </div>
  );
}

const overlayStyle = {
  position: "fixed",
  zIndex: 1000,
  left: 0, top: 0, right: 0, bottom: 0,
  background: "rgba(20,26,38,0.76)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const modalStyle = {
  background: "rgba(36,44,61,0.96)",
  borderRadius: 24,
  padding: "2rem 2.3rem",
  boxShadow: "0 8px 36px #151B2633",
  minWidth: 340,
  maxWidth: 400,
  width: "90vw",
  position: "relative"
};

const closeButtonStyle = {
  position: "absolute",
  right: 18,
  top: 16,
  fontSize: 30,
  background: "none",
  color: "#5EE6E6",
  border: "none",
  cursor: "pointer",
  lineHeight: 1
};
