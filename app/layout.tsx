import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { ScrollProvider } from "./components/providers/scrollProvider";
import { Outfit } from "next/font/google";
import Footer from "./components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solomon Kalandadze | Full Stack Developer",
  description: "Portfolio of a developer specilizing in React, Express, SQL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} h-full antialiased`}
    >
      <body>
        {/* <script src="./components/lib/ThemeScript.tsx" /> */}
        <ThemeProvider>
          <ScrollProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
