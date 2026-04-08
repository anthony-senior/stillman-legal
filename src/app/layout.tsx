import type { Metadata } from "next";
import { Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Stillman Legal P.C. | NYC Employment & Immigration Attorneys",
    template: "%s | Stillman Legal P.C.",
  },
  description:
    "New York City Employment and Immigration Attorneys. Fighting for the rights of working people. Free consultation. No fee unless we win. Call 212-832-1000.",
  keywords: [
    "employment lawyer NYC",
    "immigration attorney New York",
    "workplace discrimination lawyer",
    "sexual harassment attorney NYC",
    "wage theft lawyer",
    "Stillman Legal",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Stillman Legal P.C.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${roboto.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
