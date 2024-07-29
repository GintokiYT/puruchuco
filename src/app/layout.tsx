import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../components/layouts/Header/Header';
import Footer from "@/components/layouts/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body 
        className={inter.className}
      > 
        <Header />
        <div className="flex flex-col min-h-[calc(100vh-96px)]">
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
