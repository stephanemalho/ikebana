import Container from '../ui/Container'
import Link from 'next/link'
import { Instagram } from 'lucide-react'
import CookiePreferencesButton from '../seo/CookiePreferencesButton'
import HeaderTitle from '../header/headerTitle/HeaderTitle'

const Footer = () => {
    return (
        <section className="flex flex-col justify-between w-full h-auto">
            <div className="flex justify-center bg-white w-fit mx-auto rounded-sm my-2 overflow-hidden">
                <HeaderTitle />
            </div>
            <Container>
                <div className="flex flex-col items-center w-full justify-center gap-12 md:justify-between p-6">
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
                        href="https://www.instagram.com/ikebanaparis/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram Ikebana Paris"
                        className="inline-flex items-center gap-2 text-[--secondary-color] hover:opacity-80 transition-opacity"
                    >
                        <Instagram className="h-6 w-6" aria-hidden="true" />
                        <span className="text-sm font-medium">Suivez-nous sur Instagram</span>
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
