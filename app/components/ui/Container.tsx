import React from 'react';

type ContainerProps = {
    children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
    return (
        <article className="flex w-full max-w-7xl m-auto">
            {children}
        </article>
    );
};

export default Container;
