import "./globals.css";

export const metadata = {
  title: "Miami Yacht Day",
  description: "Charter Miami's finest yachts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* You can add <meta> and <link> tags here */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
