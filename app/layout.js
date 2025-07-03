export const metadata = {
  title: 'Miami Yacht Day',
  description: 'Your next adventure starts here!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
