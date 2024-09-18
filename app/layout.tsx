import type { Metadata } from "next";
import { ThemeProvider } from "@/context/theme-provider";
import { Poppins } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/layout/Header/MainHeader";

const popinsFont = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MasyDase",
  description: "Soluciones de software para tu negocio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={popinsFont.className}>
        <ThemeProvider>
          <MainHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
