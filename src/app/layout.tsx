import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Travello | Your Language Travel Companion",
  description: "Generate personalized language cheatsheets for your travels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans dark bg-gray-900 text-gray-100`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
