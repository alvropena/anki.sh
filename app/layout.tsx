import './globals.css'
import { Inter } from 'next/font/google'
import { MenubarDemo } from '@/components/menu-bar';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anki',
  description: 'Learn effectively.',
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
        <Analytics />
      </body>
    </html>
  )
}
