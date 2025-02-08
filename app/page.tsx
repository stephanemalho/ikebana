import Header from './components/header/Header';
import Discover from './components/hero/discover/Discover';
import Container from './components/ui/Container';

export default function Home() {
    return (
        <main>
            <Container>
                <Header />
            </Container>
            <Container>
                <Discover />
            </Container>
        </main>
    );
}
