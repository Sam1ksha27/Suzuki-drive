import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Suzuki Drive | Experience Electric',
  description: 'Flexible EV leasing from Suzuki Drive.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}