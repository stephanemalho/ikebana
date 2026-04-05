import Decoration from './left/Decoration';
import Information from './right/Information';

const Discover = async () => {
    return (
        <section className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 mt-[66px]">
            <Information />
            <Decoration />
        </section>
    );
};

export default Discover;
