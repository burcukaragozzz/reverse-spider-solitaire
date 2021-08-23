import React from 'react';
import { Link } from 'react-router-dom';

import { PageContainer, Text, GoBackButton, Icon } from './styled';

export const NoResult: React.FC = () => {
    return (
        <PageContainer>
            <Text>No Result!</Text>
            <Link to={'/'}>
                <GoBackButton>
                    <Icon src={'/icons/left-arrow.png'} width={36} />
                    Back Home
                </GoBackButton>
            </Link>
        </PageContainer>
    );
};
