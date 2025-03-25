import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import ThemeSwitcher from "./components/theme-switcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gisella Alaniz - Frontend Developer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div
          className={`${styles.page} flex flex-col gap-4 p-[20px] lg:p-[80px] 2xl:max-w-[1650px] 2xl:mx-auto`}
        >
          <div className="flex justify-end">
            <ThemeSwitcher />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
