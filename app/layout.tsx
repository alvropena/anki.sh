import './globals.css'
import { Inter } from 'next/font/google'
import { MenubarDemo } from '@/components/menu-bar';
import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anki.sh',
  description: 'The modern version of Anki!',
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
