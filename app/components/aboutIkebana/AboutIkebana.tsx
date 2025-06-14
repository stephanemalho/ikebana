import IkebanaCarousel from "./IkebanaCarousel"
import IkebanaTitle from "./IkebanaTitle"


function AboutIkebana() {
    return (
        <section className="about-ikebana relative flex flex-col justify-center items-center py-10 px-4" id="about-ikebana">
            <IkebanaTitle />
            <figure className="w-full max-w-[100%]">
                <IkebanaCarousel />
            </figure>
        </section>
    )
}

export default AboutIkebana
