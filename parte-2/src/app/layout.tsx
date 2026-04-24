import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rethink-sans",
});

export const metadata: Metadata = {
  title: "Aprenda Python do zero e construa projetos reais com IA",
  description: "O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={rethinkSans.variable}>
      <body className="font-rethink-sans">{children}</body>
    </html>
  );
}
