import React from 'react';
import Decoration from './left/Decoration';
import Information from './right/Information';
import { headers } from 'next/headers';

function isDesktopFromUA(ua: string | null): boolean {
    if (!ua) return true;
    const s = ua.toLowerCase();
    const tabletRegex = /tablet|ipad|playbook|silk/;
    const mobileRegex = /mobile|android|iphone|ipod|blackberry|bb10|opera mini|iemobile|windows phone/;
    if (tabletRegex.test(s)) return false;
    if (mobileRegex.test(s)) return false;
    return true;
}

const Discover = async () => {
    const hdrs = await headers();
    const ua = hdrs.get('user-agent');
    const isDesktop = isDesktopFromUA(ua);

    return (
        <section className="hero mt-[60px]">
            {isDesktop ? <Decoration /> : null}
            <Information />
        </section>
    );
};

export default Discover;
