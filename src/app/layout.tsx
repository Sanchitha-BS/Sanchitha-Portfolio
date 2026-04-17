// src/app/layout.tsx

import "./globals.css"; 

export const metadata = {
  title: "Sanchitha Sudarshana | Portfolio",
  description: "Sanchitha Sudarshana's Data Science, Data Engineering & Analytics portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
