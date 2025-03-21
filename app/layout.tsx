import {firaSans, merriweather} from '@/components/fonts/fonts';
import typography from '@/components/typography/_typography.module.css'
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} ${firaSans.variable} ${typography.__base}`}>{children}</body>
    </html>
  )
}