import Header from "./components/Header";
import Footer from "./components/Footer";
import { Providers } from "./store/Providers"; 
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <div className="div">
          <Providers> 
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
