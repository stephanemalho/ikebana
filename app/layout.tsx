import type { Metadata } from 'next';
import { Noto_Sans_JP, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { metaDataString } from './constant/metadata/head';
import AOSProvider from './components/wrapper/AOSProvider';

const notoSansJP = Noto_Sans_JP({
    variable: '--font-noto-sans-jp', 
    weight: ['100', '400', '700', '900'], 
    subsets: ['latin', 'latin-ext'] 
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
    variable: '--font-playfair',
  });

const jakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    variable: '--font-jakarta',
  });

export const metadata: Metadata = {
    title: metaDataString.title,
    description: metaDataString.description
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang={metaDataString.lang.en}>
            <body className={`${notoSansJP.variable} ${playfair.variable} ${jakarta.variable}`}>
                <AOSProvider>{children}</AOSProvider>
            </body>
        </html>
    );
}
