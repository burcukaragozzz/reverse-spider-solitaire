import React from 'react';

import { IButton } from 'interfaces';
import { BaseButton } from './styled';

export const Button: React.FC<IButton> = ({ ...rest }) => {
    return <BaseButton {...rest} data-testid="btn" />;
};
