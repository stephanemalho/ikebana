import ImageIkebana from "./components/imageIkebana/ImageIkebana";
import Header from "./components/header/Header";
import Discover from "./components/hero/discover/Discover";
import IkebanaInfo from "./components/ikebana-info/Ikebana-info";
import { ContactForm } from "./components/information/ContactForm";
import { ScheduleSection } from "./components/information/ScheduleSection";
import Container from "./components/ui/Container";
import SchoolInfo from "./components/school-info/SchoolInfo";

import Footer from "./components/footer/Footer";
import StructuredData from "./components/seo/StructuredData";

export default function Home() {
    return (
        <main>
            <StructuredData />
            <Header />
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
            <Footer />
        </main>
    );
}
