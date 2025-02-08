import HeaderTitle from './headerTitle/HeaderTitle';
import HeaderNav from './headerNav/HeaderNav';

const Header = () => {
    return (
        <header className="h-[90px] w-full flex flex-row">
            <HeaderTitle />
            <HeaderNav />
        </header>
    );
};

export default Header;
