import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { metaDataString } from './constant/metadata/head';

const notoSansJP = Noto_Sans_JP({
    variable: '--font-noto-sans-jp', // Crée une variable CSS pour la police
    weight: ['100', '400', '700', '900'], // Ajoutez les poids que vous souhaitez
    subsets: ['latin', 'latin-ext'] // Inclure les sous-ensembles nécessaires
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
            <body className={`${notoSansJP.variable}`}>
                {children}
            </body>
        </html>
    );
}
