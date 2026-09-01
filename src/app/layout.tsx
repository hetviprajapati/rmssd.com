import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rmssd.com'),

  title: {
    default: 'RMSSD: Formula, Normal Ranges by Age & Clinical Meaning',
    template: '%s | RMSSD.com',
  },

  description:
    'Learn what RMSSD means, how it is calculated, normal RMSSD ranges by age, RMSSD vs SDNN and pNN50, factors affecting readings, and how to measure RMSSD.',

  applicationName: 'RMSSD.com',

  keywords: [
    'RMSSD',
    'RMSSD formula',
    'RMSSD normal range',
    'RMSSD by age',
    'RMSSD meaning',
    'RMSSD score',
    'heart rate variability',
    'HRV',
    'RMSSD vs SDNN',
    'RMSSD vs pNN50',
    'how to measure RMSSD',
    'RMSSD calculation',
  ],

  alternates: {
    canonical: 'https://rmssd.com/',
  },

  openGraph: {
    title: 'RMSSD: Formula, Normal Ranges by Age & Clinical Meaning',

    description:
      'A complete guide to RMSSD — the primary time-domain HRV measure. Learn the formula, normal ranges by age, clinical meaning, and how to measure it.',

    url: 'https://rmssd.com/',

    siteName: 'RMSSD.com',

    type: 'article',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'RMSSD: Formula, Normal Ranges by Age & Clinical Meaning',

    description: 'Learn the RMSSD formula, normal ranges by age, clinical meaning, and how to measure RMSSD.',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
    </html>
  );
}
