import './globals.css'
import { Inter } from 'next/font/google'
import { UserNav } from '@/components/user-nav';
import { AlignLeft } from 'lucide-react';
import Link from 'next/link';

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
          <Link href={'/'}>
            <AlignLeft />
          </Link>
          <div>
            <Link href={'/decks'}>
              Decks
            </Link>
            <Link href={"/analytics"}>
              Analytics
            </Link>
          </div>
          <UserNav />
        </nav>
        {children}</body>
    </html>
  )
}
