import React from 'react';

import { CardBody } from './styled';

export type CardHolderProps = {
    onClick?: VoidFunction;
    imageUrl?: string;
    style?: React.CSSProperties;
};

export const CardHolder: React.FC<CardHolderProps> = ({ children, ...props }) => {
    return <CardBody {...props}>{children}</CardBody>;
};
