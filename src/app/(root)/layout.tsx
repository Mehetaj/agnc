import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

import ThemeProvider from "@/provider/ThemeProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bytezenith",
  description: "",
};

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const RootLayout = ({ children }: Props) => {
  return (
    <html id="body"  lang="en">
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider attribute="class" enableSystem={false}>
          <div className="dark:bg-[#061126] dark:text-white">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};
export default RootLayout;
