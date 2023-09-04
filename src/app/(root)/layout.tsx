import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import '@smastrom/react-rating/style.css'

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
    <html id="body" className="" lang="en">
      <body
        className={`${inter.className}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};
export default RootLayout;
