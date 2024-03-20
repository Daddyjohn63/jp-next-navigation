import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navigation/navbar';
import MobileSidebar from '@/components/navigation/mobile-sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My new website',
  description: 'Created by John Paul'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          {/* <MobileSidebar /> */}
          <Navbar />
        </div>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
