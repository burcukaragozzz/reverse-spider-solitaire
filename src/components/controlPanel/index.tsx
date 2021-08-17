import React from 'react';

import { PanelContainer, BackButton, BackIcon } from './styled';

export const ControlPanel: React.FC = () => {
    return (
        <PanelContainer>
            <BackButton>
                <BackIcon src={'/icons/left-arrow.svg'} width={32} />
                Back Home
            </BackButton>
        </PanelContainer>
    );
};
