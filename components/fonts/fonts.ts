import {Merriweather, Fira_Sans, Fira_Code} from 'next/font/google';

export const merriweather = Merriweather({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  weight: ["300", "400", "700"],
  style: ['normal', 'italic'],
  variable: "--font-merriweather"
});

export const firaSans = Fira_Sans({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  weight: ["200", "400", "700"],
  style: ['normal', "italic"],
  variable: "--font-fira-sans"

});

export const firaCode = Fira_Code({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  weight: ["400", "700"],
  style: ['normal'],
  variable: "--font-fira-code"
});