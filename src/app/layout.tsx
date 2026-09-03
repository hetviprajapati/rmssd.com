import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

import './globals.css';

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

  applicationName: 'RMSSD.com',

  title: 'RMSSD: Formula, Normal Ranges by Age & Clinical Meaning',

  description:
    'Learn what RMSSD means, how it is calculated, normal RMSSD ranges by age, RMSSD vs SDNN and pNN50, factors affecting readings, and how to measure RMSSD.',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'RMSSD: Formula, Normal Ranges by Age & Clinical Meaning',

    description:
      'A complete guide to RMSSD — the primary time-domain HRV measure. Learn the formula, normal ranges by age, clinical meaning, and how to measure it.',

    url: '/',

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

    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>

      {process.env.NEXT_PUBLIC_GA_ID ? <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} /> : null}
    </html>
  );
}
