import Link from 'next/link';
import Container from '../ui/Container';
import { stringHeader } from '@/app/constant/page/header';

const Footer = () => {
    const primaryLinks = [
        { href: '/', label: 'Accueil' },
        { href: '/ecole-ikebana-ohara', label: "Ecole d'Ikebana Ohara" },
        { href: '/cours-ikebana', label: "Cours d'Ikebana" },
        { href: '/inscription-ikebana', label: 'Inscription' },
        { href: '/galerie-ikebana', label: 'Galerie' }
    ];

    const locationLinks = [
        { href: '/cours-ikebana-paris', label: 'Cours a Paris' },
        { href: '/cours-ikebana-yvelines', label: 'Cours dans les Yvelines' }
    ];

    const knowledgeLinks = [
        { href: '/histoire-ikebana', label: "Histoire de l'Ikebana" },
        { href: '/ecole-ohara', label: "Ecole Ohara" },
        { href: '/philosophie-ikebana', label: "Philosophie de l'Ikebana" },
        { href: '/faq-ikebana', label: 'FAQ Ikebana' },
        { href: '/contact', label: 'Contact' }
    ];

    return (
        <footer className="w-full py-12 bg-[--primary-color] border-t border-[--secondary-color]/20">
            <Container>
                <div className="px-4 md:px-6 w-full m-auto">
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="space-y-3">
                            <h3 className="text-2xl text-[--secondary-color]" style={{ fontFamily: 'var(--playfair-display)' }}>
                                {stringHeader.title}
                            </h3>
                            <p className="text-[--secondary-color] font-[var(--inter-ikebana)]">
                                Ecole d&apos;Ikebana Ohara - Paris &amp; Yvelines
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-[--secondary-color] mb-3">Navigation</h4>
                            <ul className="space-y-2 text-[--secondary-color] font-[var(--inter-ikebana)]">
                                {primaryLinks.map((item) => (
                                    <li key={item.href}>
                                        <Link className="hover:text-black underline-offset-4 hover:underline" href={item.href}>
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <h4 className="text-lg font-semibold text-[--secondary-color] mb-3">Cours par lieu</h4>
                                <ul className="space-y-2 text-[--secondary-color] font-[var(--inter-ikebana)]">
                                    {locationLinks.map((item) => (
                                        <li key={item.href}>
                                            <Link className="hover:text-black underline-offset-4 hover:underline" href={item.href}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-[--secondary-color] mb-3">En savoir plus</h4>
                                <ul className="space-y-2 text-[--secondary-color] font-[var(--inter-ikebana)]">
                                    {knowledgeLinks.map((item) => (
                                        <li key={item.href}>
                                            <Link className="hover:text-black underline-offset-4 hover:underline" href={item.href}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
