import './globals.css'
import { Inter } from 'next/font/google'
import { UserNav } from '@/components/user-nav';
import { AlignLeft, Bell, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import Search from '@/components/search';
import { MenubarDemo } from '@/components/menu-bar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sabio',
  description: 'True learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex justify-center items-center mt-4'>
          <MenubarDemo />
        </div>
        {children}
      </body>
    </html>
  )
}
