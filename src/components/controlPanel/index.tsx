import React from 'react';
import { Timer } from 'components';

import { PanelContainer, BackButton, Icon, RightSide, Section, Text } from './styled';

export const ControlPanel: React.FC = () => {
    return (
        <PanelContainer>
            <BackButton>
                <Icon src={'/icons/left-arrow.png'} width={36} />
                Back Home
            </BackButton>
            <RightSide>
                <Section>
                    <Icon src={'/icons/award.png'} width={36} />
                    <Text>Score :</Text>
                    {'65'}
                </Section>
                <Section>
                    <Icon src={'/icons/timer.png'} width={36} />
                    <Text>Timer :</Text>
                    <Timer />
                </Section>
            </RightSide>
        </PanelContainer>
    );
};
