import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ASTRA',
  description: 'Ultimate Tech Festival by Sacred Heart College',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#000000] flex flex-col min-h-screen  ">
        <Header/>
        <div className="flex-grow "> 
          <div> 
            {children}
          </div>
        </div>
        <Footer/>
      </body>
    </html>
  );
}