import Container from '../ui/Container'
import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'
import CookiePreferencesButton from '../seo/CookiePreferencesButton'
import HeaderTitle from '../header/headerTitle/HeaderTitle'

const Footer = () => {
    return (
        <section className="flex flex-col justify-between w-full md:h-[220px]">
                <div className="flex justify-center pt-4">
                    <HeaderTitle />
                </div>
            <Container>
                <div className="flex flex-col items-center w-full justify-center md:flex-row gap-12 md:justify-between py-6">
                    <a
                        href="https://www.instagram.com/ikebanaparis/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram Ikebana Paris"
                        className="inline-flex items-center gap-2 text-[--secondary-color] hover:opacity-80 transition-opacity"
                    >
                        <Instagram className="h-6 w-6" aria-hidden="true" />
                        <span className="text-sm font-medium">Suivez-nous sur Instagram</span>
                    </a>
                    <div className="flex flex-col md:flex-row m-auto items-center gap-4 px-4">
                        <Link className="text-sm text-[--secondary-color] underline hover:text-black" href="/mentions-legales">
                            Mentions légales
                        </Link>
                        <Link className="text-sm text-[--secondary-color] underline hover:text-black" href="/politique-de-confidentialite">
                            Confidentialité
                        </Link>
                        <Link className="text-sm text-[--secondary-color] underline hover:text-black" href="/cookies">
                            Cookies
                        </Link>
                        <CookiePreferencesButton />
                    </div>
                    <a
                        href="https://www.facebook.com/ikuko.katoenfroy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram Ikebana Paris"
                        className="inline-flex items-center gap-2 text-[--secondary-color] hover:opacity-80 transition-opacity"
                    >
                        <span className="text-sm font-medium">Suivez-nous sur Facebook</span>
                        <Facebook className="h-6 w-6" aria-hidden="true" />
                    </a>
                </div>

            </Container>
            <p className="text-center text-sm text-[--secondary-color]">
                © {new Date().getFullYear()} Association Ikebana Ohara.
                Tous droits réservés.
            </p>
        </section>
    )
}

export default Footer
