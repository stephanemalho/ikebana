import Discover from "./components/hero/discover/Discover";
import IkebanaInfo from "./components/ikebana-info/Ikebana-info";
import Container from "./components/ui/Container";
import SchoolInfo from "./components/school-info/SchoolInfo";

export default function Home() {
    return (
        <main>
            <Container>
                <Discover />
            </Container>
            <IkebanaInfo />
            <SchoolInfo />
        </main>
    );
}
