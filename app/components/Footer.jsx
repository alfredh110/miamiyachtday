import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#232F4B",
        padding: "2.2rem 0 0.5rem 0",
        marginTop: "2rem",
        color: "#FFD700",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 700,
        letterSpacing: ".03em",
        fontSize: 18,
      }}
    >
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <div style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.3rem",
        }}>
          <span>Miami Yacht Day</span>
          <div style={{
            display: "flex",
            gap: 18,
            alignItems: "center",
          }}>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{ display: "inline-flex" }}
            >
              <svg width="27" height="27" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#FFD700" />
                <g>
                  <circle cx="16" cy="16" r="6" stroke="#232F4B" strokeWidth="2"/>
                  <circle cx="23" cy="9" r="1.3" fill="#232F4B" />
                </g>
                <rect x="6" y="6" width="20" height="20" rx="6" stroke="#232F4B" strokeWidth="2"/>
              </svg>
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={{ display: "inline-flex" }}
            >
              <svg width="27" height="27" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#FFD700" />
                <path d="M20.5 17.5L21 14.5H18V12.5C18 11.7 18.3 11 19.5 11H21V8.4C20.8 8.3 20.1 8 19 8C16.9 8 15.5 9.2 15.5 12V14.5H13V17.5H15.5V24H18V17.5H20.5Z" fill="#232F4B"/>
              </svg>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter/X"
              style={{ display: "inline-flex" }}
            >
              <svg width="27" height="27" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#FFD700" />
                <path d="M12 10h2.5l2.7 3.7L20 10h2l-3.6 5L22 22h-2.5l-3-4.1L13 22h-2l3.8-5.5L10 10zm3 4.6l2.4 3.4h.1l.1-.1-2.4-3.3h-.2zm.8 1.1l-2.4 3.3h-.1l-.1-.1 2.4-3.2h.2z" fill="#232F4B"/>
              </svg>
            </a>
          </div>
        </div>
        <div style={{
          fontWeight: 400,
          color: "#B0BED8",
          fontSize: 15,
          letterSpacing: ".01em",
          textAlign: "center"
        }}>
          © Miami Yacht Day
        </div>
      </div>
    </footer>
  );
}
