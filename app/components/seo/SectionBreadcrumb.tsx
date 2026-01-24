import Container from "../ui/Container";
import { sectionLinks } from "@/app/constant/seo/sections";

export default function SectionBreadcrumb() {  
    return (
        <nav aria-label="Navigation des sections">
            <Container>
                <div className="px-4 md:px-6 py-4 m-auto">
                    <ol className="flex flex-wrap gap-3 text-sm text-[--secondary-color] justify-center" >
                        {sectionLinks.map((section) => (
                            <li key={section.id}>
                                <a className="hover:underline hover:text-black" href={`#${section.id}`}>
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
