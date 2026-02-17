import './globals.css';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Native4a',
    template: '%s | Native4a',
  },
  description: 'Native4a - Digital Marketing Solutions',
  keywords: 'digital marketing, SEO, web design, social media marketing',
  authors: [{ name: 'Native4a' }],
  creator: 'Native4a',
  metadataBase: new URL('https://nativeaaaa.com.hk'),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FAAB00',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
