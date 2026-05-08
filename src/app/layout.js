import "./globals.css";

export const metadata = {
  title: "Kenangan Sekolah",
  description: "Website kenangan sekolah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}