import Container from "../ui/Container";
import { sectionLinks } from "@/app/constant/seo/sections";

export default function SectionBreadcrumb() {
    return (
        <nav aria-label="Navigation des sections" className="w-full bg-[--primary-color] border-y border-[--secondary-color]/20">
            <Container>
                <div className="px-4 md:px-6 py-4">
                    <ol className="flex flex-wrap gap-3 text-sm text-[--secondary-color]">
                        {sectionLinks.map((section) => (
                            <li key={section.id}>
                                <a className="underline hover:text-black" href={`#${section.id}`}>
                                    {section.label}
                                </a>
                            </li>
                        ))}
                    </ol>
                </div>
            </Container>
        </nav>
    );
}
