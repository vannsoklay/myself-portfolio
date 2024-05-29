import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MyNavbar } from "./components/Navbar";
import { MyFooter } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "@lay512",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen bg-gradient-to-r from-[#000428] to-[#004e92]">
          <MyNavbar />
          <main className="relative">
            {children}
          </main>
          {/* <MyFooter /> */}
        </div>
      </body>
    </html>
  );
}
