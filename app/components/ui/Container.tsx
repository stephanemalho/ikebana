import React from 'react';

type ContainerProps = {
    children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
    return (
        <article className="flex w-full max-w-[1460px] m-auto">
            {children}
        </article>
    );
};

export default Container;
