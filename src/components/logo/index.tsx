import React from 'react';

export type LogoProps = {
    imageUrl?: string;
};

export const Logo: React.FC<LogoProps> = ({ imageUrl }) => {
    return (
        <img src={imageUrl ?? '/images/spider-logo.png'} alt="spdier-solitaire-logo" width="60" />
    );
};
