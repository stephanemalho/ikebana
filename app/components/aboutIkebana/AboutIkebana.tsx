import React from "react";
import IkebanaTitle from "./IkebanaTitle";
import IkebanaCarousel from "./IkebanaCarousel";

function AboutIkebana() {
    return (
        <section
            className="about-ikebana relative flex flex-col justify-center items-center py-10"
            id="about-ikebana"
        >
            <IkebanaTitle />
            <figure className="w-full max-w-[100%]">
                <IkebanaCarousel />
            </figure>
        </section>
    );
}

export default AboutIkebana;
