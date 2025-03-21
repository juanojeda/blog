import {firaSans, merriweather} from '../components/fonts/fonts';
import '../styles/globals.css';
import typography from '../components/typography/_typography.module.css'

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