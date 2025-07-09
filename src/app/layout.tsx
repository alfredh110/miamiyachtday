import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Miami Yacht Day</title>
        <meta name="description" content="Luxury yacht rental and listing in Miami. Old money style, effortless booking." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Inter:400,500,700,800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700,800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
