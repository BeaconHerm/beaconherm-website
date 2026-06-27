import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Beaconherm Limited — Premium Outdoor Tents',
    template: '%s | Beaconherm',
  },
  description:
    'Beaconherm Limited designs and builds premium outdoor tents for backpacking, family camping, and alpine expeditions. Field-tested in the Rocky Mountains. Built to last a lifetime.',
  keywords: [
    'outdoor tents',
    'backpacking tent',
    'family camping tent',
    '4 season tent',
    'expedition tent',
    'ultralight tent',
    'Beaconherm',
    'camping gear',
    'hiking equipment',
  ],
  authors: [{ name: 'Beaconherm Limited', url: 'https://beaconherm.com' }],
  metadataBase: new URL('https://beaconherm.com'),
  openGraph: {
    title: 'Beaconherm Limited — Premium Outdoor Tents',
    description:
      'Premium tents for thru-hikers, families, and alpinists. Field-tested in the Rockies. Backed by our Ironclad Lifetime Warranty.',
    url: 'https://beaconherm.com',
    siteName: 'Beaconherm',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Beaconherm tent pitched at sunset in the mountains',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beaconherm — Premium Outdoor Tents',
    description:
      'Tents built for the real backcountry. Backpacking, family camping, and expedition models.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
