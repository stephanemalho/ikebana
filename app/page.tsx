import type { Metadata } from "next";
import ImageIkebana from "./components/imageIkebana/ImageIkebana";
import Discover from "./components/hero/discover/Discover";
import IkebanaInfo from "./components/ikebana-info/Ikebana-info";
import { ContactForm } from "./components/information/ContactForm";
import { ScheduleSection } from "./components/information/ScheduleSection";
import Container from "./components/ui/Container";
import SchoolInfo from "./components/school-info/SchoolInfo";

import StructuredData from "./components/seo/StructuredData";
import FaqSection from "./components/seo/FaqSection";

export const metadata: Metadata = {
    alternates: {
        canonical: "/"
    }
};

export default function Home() {
    return (
        <main id="top">
            <StructuredData />
            <Container>
                <Discover />
            </Container>
            <Container>
                <SchoolInfo />
            </Container>
            <IkebanaInfo />
            <Container>
                <ImageIkebana />
            </Container>
            <ScheduleSection />
            <ContactForm />
            <FaqSection />
        </main>
    );
}
