import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "./context/GlobalContext";
import Header from "./components/Header";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist", // আলাদা ভেরিয়েবল
});

export const metadata: Metadata = {
  title: "Job Portal",
  description: "Find your dream job easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${urbanist.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col font-urbanist">
        <GlobalContextProvider>
          <main className="flex-1">{children}</main>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
