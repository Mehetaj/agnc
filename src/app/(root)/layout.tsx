"use client";
import "../globals.css";
import { Inter } from "next/font/google";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import ThemeProvider from "@/provider/ThemeProvider";
import Cursor from "../Shared/AnimatedCursor/AnimatedCursor";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" enableSystem={false}>
          <div className="dark:bg-[#061126] dark:text-white">
            <Navbar />
            {children}
            <Cursor />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};
export default RootLayout;
