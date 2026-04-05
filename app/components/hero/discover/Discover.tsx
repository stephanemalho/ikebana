import Decoration from './left/Decoration';
import Information from './right/Information';

const Discover = async () => {
    return (
        <section className="mx-auto mt-[66px] grid max-w-7xl gap-4 lg:grid-cols-2 lg:items-center lg:gap-8">
            <Information />
            <Decoration />
        </section>
    );
};

export default Discover;
