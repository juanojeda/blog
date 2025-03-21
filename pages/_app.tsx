import type { AppProps } from 'next/app'
import {firaSans, merriweather} from '../components/fonts/fonts';
import '../styles/globals.css';
import typography from '../styles/_typography.module.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${merriweather.variable} ${firaSans.variable} ${typography.__base}`}>
      <Component {...pageProps} />
    </main>
)
}