import Container from '../ui/Container';
import HeaderNav from './headerNav/HeaderNav';
import HeaderTitle from './headerTitle/HeaderTitle';

const Header = () => {
    return (
        <header className="fixed w-full top-0 left-0 right-0 z-50 backdrop-blur-md">
            <Container>
                <div className="flex flex-row justify-between items-center w-full">
                    <HeaderTitle />
                    <HeaderNav />
                </div>
            </Container>
        </header>
    );
};

export default Header;
