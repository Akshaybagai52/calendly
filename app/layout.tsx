import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeadersAdapter } from "next/dist/server/web/spec-extension/adapters/headers";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Schedulrr",
  description: "Meeting Scheduling App",
};

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
          {children}
        </main>
        <footer className="bg-blue-100 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made with 💖 by Akshay</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
