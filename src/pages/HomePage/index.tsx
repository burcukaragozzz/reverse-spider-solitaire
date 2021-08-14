import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Button, SuitCard } from 'components';

import { PageContainer, Menu, SuitsContainer } from './styled';

export const HomePage: React.FC = () => {
    const suits = ['spade', 'diamond', 'club', 'heart'];

    return (
        <Wrapper>
            <PageContainer>
                <Menu>
                    <SuitsContainer>
                        {suits.map((suit) => (
                            <SuitCard key={suit} suit={suit} />
                        ))}
                    </SuitsContainer>

                    <Link to={`/game`}>
                        <Button>Start Game</Button>
                    </Link>
                </Menu>
            </PageContainer>
        </Wrapper>
    );
};
