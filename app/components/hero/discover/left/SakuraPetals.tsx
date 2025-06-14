"use client";
import Image from 'next/image';
import { JSX, useEffect, useState } from 'react';

const NUM_PETALS = 4;
const PETAL_VARIANTS = 5;

const randomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const SakuraPetals = () => {
    const [petals, setPetals] = useState<Array<JSX.Element>>([]);

    useEffect(() => {
        const newPetals = Array.from({ length: NUM_PETALS }, (_, index) => {
            const petalIndex = randomInt(1, PETAL_VARIANTS);
            const left = `${randomInt(0, 100)}%`;
            const duration = `${randomInt(8, 15)}s`;
            const delay = `${randomInt(0, 10)}s`;
            const size = `${randomInt(16, 18)}px`;
            const swayDirection = Math.random() > 0.5 ? 'animate-sway-left' : 'animate-sway-right';

            return (
                <div
                    key={index}
                    className={`absolute top-20 ${swayDirection}`}
                    style={{
                        left,
                        width: size,
                        height: size,
                        animationDelay: delay,
                    }}
                >
                    <Image
                        src={`/assets/${petalIndex}-petal.png`}
                        alt="sakura petal"
                        width={32}
                        height={32}
                        className="animate-fall"
                        style={{
                            animationDuration: duration,
                            width: size,
                            height: size,
                        }}
                    />
                </div>
            );
        });

        setPetals(newPetals);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 w-5/6 ml-auto">
            {petals}
        </div>
    );
};


export default SakuraPetals;
