import { Work_Sans } from "next/font/google";
import Header from "@/components/header";

import "./globals.css";
import Footer from "@/components/footer";

const work_Sans = Work_Sans({
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#1A1A1A] text-[#FFFFFF] ${work_Sans.className} dilg min-h-[100vh]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}