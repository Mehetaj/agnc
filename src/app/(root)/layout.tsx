import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bytezenith",
  description: "",
};


type Props ={
  children: string | JSX.Element | JSX.Element[];
}


const RootLayout = ({ children }: Props) => {
  return (
    <html className="w-full lg:container px-10 mx-auto" lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};
export default RootLayout;