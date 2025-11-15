import ImageIkebana from "./components/imageIkebana/ImageIkebana";
import Header from "./components/header/Header";
import Discover from "./components/hero/discover/Discover";
import IkebanaInfo from "./components/ikebana-info/Ikebana-info";
import { ContactForm } from "./components/information/ContactForm";
import { ScheduleSection } from "./components/information/ScheduleSection";
import Container from "./components/ui/Container";

export default function Home() {
    return (
        <main>
            <Header />
            <Container>
                <Discover />
            </Container>
            <Container>
                <ImageIkebana />
            </Container>
            <IkebanaInfo />
            <ScheduleSection />
            <ContactForm />
        </main>
    );
}
