import Container from '../ui/Container'
import Link from 'next/link'
import { Instagram } from 'lucide-react'

const Footer = () => {
    return (
        <section className="w-full py-10 bg-[--primary-color]">
            <Container>
                <div className="flex items-center justify-center gap-6">
                    <Link
                        href="https://www.instagram.com/ikebanaparis/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram Ikebana Paris"
                        className="inline-flex items-center gap-2 text-[--secondary-color] hover:opacity-80 transition-opacity"
                    >
                        <Instagram className="h-6 w-6" aria-hidden="true" />
                        <span className="text-sm font-medium">Suivez-nous sur Instagram</span>
                    </Link>
                </div>

            </Container>
            <p className="text-center mt-6 text-sm text-[--secondary-color]">
                © {new Date().getFullYear()} Association Ikebana Ohara.
                Tous droits réservés.
            </p>
        </section>
    )
}

export default Footer
