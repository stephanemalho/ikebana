import HeaderNav from './headerNav/HeaderNav';
import HeaderTitle from './headerTitle/HeaderTitle';

const Header = () => {
    return (
        <header className="w-full">
            <div className="header__nav">
                <HeaderTitle />
                <HeaderNav />
            </div>
        </header>
    );
};

export default Header;
