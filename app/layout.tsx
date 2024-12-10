import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

const InterTight = Inter_Tight({
  subsets: ["cyrillic"],
  variable: "--font-InterTight",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Главная страница",
  description: "Главная страница",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={InterTight.className}>
        <main className="min-h-screen relative">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
