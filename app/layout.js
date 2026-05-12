import { Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const HankenSans = Hanken_Grotesk({
  variable: "--font-hanken-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Trænershoppen",
  description: "Sportsudstyr til din klub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da" className={`${HankenSans.variable} h-full antialiased`}>
      <body
        className="min-h-full flex flex-col overflow-x-hidden"
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
