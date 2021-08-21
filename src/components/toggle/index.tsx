import React from 'react';

import { useTheme } from 'hooks';
import { IButton } from 'interfaces';

import { ToggleContainer } from './styled';

export const Toggle: React.FC<IButton> = () => {
    const { toggle } = useTheme();

    return (
        <ToggleContainer onClick={toggle} data-testid="toggle">
            <img src="/icons/light-icon.png" alt="light-icon" width="32" height="32" />
            <img src="/icons/dark-icon.png" alt="dark-icon" width="32" height="32" />
        </ToggleContainer>
    );
};
