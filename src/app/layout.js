import { Inter, Readex_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });
const readex = Readex_Pro({ subsets: ["latin"] });

export const metadata = {
  title: "Puppyland",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={readex.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
