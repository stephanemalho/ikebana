import { stringHeader } from '@/app/constant/page/header';
import Image from 'next/image';
import Link from 'next/link';

const HeaderTitle = () => {
    return (
        <Link href="/" className="flex flex-row p-2 gap-2">
            <Image src="/images/logo-ohara-yvelines-paris.png" width={50} height={20} alt="logo-ikebana" className="flex-1" />
            <div className="lg:flex-col lg:align-center z-1 flex-1 text-nowrap hidden lg:flex">
                <h4>{stringHeader.title}</h4>
                <div data-aos="fade-down" className="text-[--title-color]">
                    {stringHeader.paragraph}
                </div>
            </div>
        </Link>
    );
};

export default HeaderTitle;
