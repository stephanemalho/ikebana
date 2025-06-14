import AboutIkebana from "./components/aboutIkebana/AboutIkebana";
import Header from "./components/header/Header";
import Discover from "./components/hero/discover/Discover";
import IkebanaInfo from "./components/ikebana-info/Ikebana-info";
import { ContactForm } from "./components/information/ContactForm";
import { PricingSection } from "./components/information/PricingSection";
import { ScheduleSection } from "./components/information/ScheduleSection";
import Container from "./components/ui/Container";

export default function Home() {
    return (
        <main>
            <Container>
                <Header />
            </Container>
            <Container>
                <Discover />
            </Container>
            <Container>
                <AboutIkebana />
            </Container>
            <IkebanaInfo />
            <Container>
                <ScheduleSection />
            </Container>
            <Container>
                <PricingSection />
            </Container>
            <Container>
                <ContactForm />
            </Container>
        </main>
    );
}
