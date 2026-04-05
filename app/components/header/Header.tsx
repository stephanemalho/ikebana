import Container from "../ui/Container";
import HeaderNavTo from "./headerNav/HeaderNavTo";
import HeaderTitle from "./headerTitle/HeaderTitle";

const Header = () => {

    return (
        <header className="fixed w-full top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/60">
            <Container>
                <div className="flex justify-between items-center w-full">
                    <HeaderTitle />
                    <HeaderNavTo />
                </div>
            </Container>
        </header>
    );
};

export default Header;
