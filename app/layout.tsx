import type { Metadata } from 'next';
import { Noto_Sans_JP, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { metaDataString } from './constant/metadata/head';
import AOSProvider from './components/wrapper/AOSProvider';

const siteUrl = "https://ohara-chapitre-yvelines-paris.fr";

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
    metadataBase: new URL(siteUrl),
    title: metaDataString.title,
    description: metaDataString.description,
    alternates: {
        canonical: siteUrl
    },
    openGraph: {
        type: "website",
        url: siteUrl,
        title: metaDataString.title,
        description: metaDataString.description,
        siteName: metaDataString.siteName,
        locale: metaDataString.locale,
        images: [
            {
                url: "/images/logo-ohara-removebg.png",
                alt: metaDataString.siteName
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: metaDataString.title,
        description: metaDataString.description,
        images: ["/images/logo-ohara-removebg.png"]
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1
        }
    },
    icons: {
        icon: "/favicon.ico"
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={`${notoSansJP.variable} ${playfair.variable} ${jakarta.variable}`}>
                <AOSProvider>{children}</AOSProvider>
            </body>
        </html>
    );
}
