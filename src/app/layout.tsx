"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import ThemeProvider from "@/provider/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const GlobalLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-[#061126] dark:text-white`}>
        <ThemeProvider attribute="class" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};
export default GlobalLayout;
