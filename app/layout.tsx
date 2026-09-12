import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aij Djde - Premium Apple Accessories',
  description: 'Official store in Moscow. Premium accessories for Apple. Free delivery!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}