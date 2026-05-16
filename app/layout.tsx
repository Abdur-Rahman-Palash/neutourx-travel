import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import SmoothScroll from '@/components/ui/SmoothScroll';
import PageTransition from '@/components/ui/PageTransition';
import { ThemeProvider } from '@/providers';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEUTOURX - Premium Travel Agency",
  description: "Book your dream vacation with NEUTOURX, the ultimate premium travel platform inspired by the best in the industry.",
  keywords: "travel, booking, flights, hotels, vacation, premium travel",
  authors: [{ name: "NEUTOURX Team" }],
  openGraph: {
    title: "NEUTOURX - Premium Travel Agency",
    description: "Book your dream vacation with NEUTOURX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <PageTransition />
          <SmoothScroll>
            <Header />
            <Sidebar />
            <main className="flex-1 pt-16">{children}</main>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
