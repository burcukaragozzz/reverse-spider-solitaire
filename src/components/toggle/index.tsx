import React from 'react';

import { ToggleContainer } from './styled';
import { IButton } from 'interfaces';

import { useTheme } from 'hooks';

export const Toggle: React.FC<IButton> = () => {
    const { toggle } = useTheme();

    return (
        <ToggleContainer onClick={toggle} data-testid="toggle">
            <div>
                <img src="/icons/light-icon.png" alt="light-icon" width="32" height="32" />
                <img src="/icons/dark-icon.png" alt="dark-icon" width="32" height="32" />
            </div>
        </ToggleContainer>
    );
};
