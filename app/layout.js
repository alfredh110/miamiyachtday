import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miami Yacht Day",
  description: "Your next adventure starts here!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
