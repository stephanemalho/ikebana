"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const SakuraPetals = dynamic(() => import("./SakuraPetals"), {
    ssr: false,
    loading: () => null,
});

const LazySakuraPetals = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 2500); // 2.5 secondes après FCP

        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return <SakuraPetals />;
};

export default LazySakuraPetals;
