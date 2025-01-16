import AppFooter from '@/components/app/AppFooter'
import AppNavbar from '@/components/app/AppNavbar'
import {Inter} from 'next/font/google'
import '../../styles/main.scss'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Open Fresno',
  description: 'Open Fresno civic technology.',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <AppNavbar/>
    <main>
    {children}
    </main>
    <AppFooter/>
    </body>
    </html>
  )
}
