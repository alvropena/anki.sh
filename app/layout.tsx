import './globals.css'
import { Inter } from 'next/font/google'
import { UserNav } from '@/components/user-nav';
import { AlignLeft, Bell } from 'lucide-react';
import Link from 'next/link';
import Search from '@/components/search';

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
        <nav className='flex justify-between m-4'>
          {/* <Link href={'/'}>
            <AlignLeft />
          </Link> */}
          <div className='flex gap-4'>
            <Link href={'/'}>
              Decks
            </Link>
            <Link href={"/analytics"}>
              Analytics
            </Link>
          </div>
          <div className='flex items-center gap-4'>
            <Search />
            <button>
              <Bell />
            </button>
            <UserNav />
          </div>
        </nav>
        {children}</body>
    </html>
  )
}
