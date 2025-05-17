import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600'],
  variable: '--font-opensans',
});

export const metadata: Metadata = {
  title: "Travello - Your Language Travel Companion",
  description: "Get instant access to essential phrases for your next adventure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} ${openSans.variable}`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
