import React from 'react';

type ContainerProps = {
    children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
    return (
        <div className="flex w-full max-w-7xl m-auto">
            {children}
        </div>
    );
};

export default Container;
