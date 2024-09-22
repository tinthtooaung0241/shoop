import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Urbanist } from "next/font/google";
import Footer from "./components/footer";
import NavBar from "./components/nav-bar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const urbanits = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SHOOP",
  description: "Store by SHOOP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${urbanits.className}`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
