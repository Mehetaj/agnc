import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/provider/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bytezenith",
  description: "",
};

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" enableSystem={false}>
          <div className="dark:bg-[#7367F0] dark:text-white">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
export default DashboardLayout;