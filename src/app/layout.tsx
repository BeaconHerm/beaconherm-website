import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'BeaconHerm Limited — Premium Outdoor Tents',
    template: '%s | BeaconHerm',
  },
  description:
    'BeaconHerm Limited designs and builds premium outdoor tents for backpacking, family camping, and alpine expeditions. Field-tested in the Rocky Mountains. Built to last a lifetime.',
  keywords: [
    'outdoor tents',
    'backpacking tent',
    'family camping tent',
    '4 season tent',
    'expedition tent',
    'ultralight tent',
    'BeaconHerm',
    'camping gear',
    'hiking equipment',
  ],
  authors: [{ name: 'BeaconHerm Limited', url: 'https://beaconherm.com' }],
  metadataBase: new URL('https://beaconherm.com'),
  openGraph: {
    title: 'BeaconHerm Limited — Premium Outdoor Tents',
    description:
      'Premium tents for thru-hikers, families, and alpinists. Field-tested in the Rockies. Backed by our Ironclad Lifetime Warranty.',
    url: 'https://beaconherm.com',
    siteName: 'BeaconHerm',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'BeaconHerm tent pitched at sunset in the mountains',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BeaconHerm — Premium Outdoor Tents',
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
