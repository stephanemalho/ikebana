import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { metaDataString } from './constant/metadata/head';
import CookieBanner from "./components/seo/CookieBanner";
import ConsentScripts from "./components/seo/ConsentScripts";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const siteUrl = "https://ohara-chapitre-yvelines-paris.fr";
const defaultOgImage = "/images/logo-ikebana-ecole-ohara-paris-yvelines.png";

const roboto = Roboto({
    subsets: ['latin', 'latin-ext'],
    weight: ['300', '400', '500', '700', '900'],
    variable: '--font-roboto',
    display: 'swap'
});

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: metaDataString.title,
        template: `%s | ${metaDataString.siteName}`
    },
    description: metaDataString.description,
    applicationName: metaDataString.siteName,
    openGraph: {
        type: "website",
        url: siteUrl,
        title: metaDataString.title,
        description: metaDataString.description,
        siteName: metaDataString.siteName,
        locale: metaDataString.locale,
        images: [
            {
                url: defaultOgImage,
                alt: metaDataString.siteName
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: metaDataString.title,
        description: metaDataString.description,
        images: [defaultOgImage]
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
            <body className={roboto.variable}>
                <Header />
                {children}
                <Footer />
                <ConsentScripts />
                <CookieBanner />
            </body>
        </html>
    );
}
