import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/provider/ThemeProvider";
// import Cursor from "../Shared/AnimatedCursor/AnimatedCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bytezenith",
  description: "This is bytezenith a software agency",
};

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" enableSystem={false}>
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
<<<<<<< HEAD
}
export default DashboardLayout;
=======
};
export default DashboardLayout;

>>>>>>> 33d5c8be2b8643e19a9b7c4a6459d445635a624d
