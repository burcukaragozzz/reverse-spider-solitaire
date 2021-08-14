import React from 'react';

import { Wrapper, Button } from 'components';

import { PageContainer, Menu, SuitsContainer, SuitBox, Suit } from './styled';

export const HomePage: React.FC = () => {
    return (
        <Wrapper>
            <PageContainer>
                <Menu>
                    <SuitsContainer>
                        <SuitBox>
                            <Suit src={'/images/spade.png'} />
                        </SuitBox>

                        <SuitBox>
                            <Suit src={'/images/diamond.png'} />
                        </SuitBox>
                        <SuitBox>
                            <Suit src={'/images/club.png'} />
                        </SuitBox>
                        <SuitBox>
                            <Suit src={'/images/heart.png'} />
                        </SuitBox>
                    </SuitsContainer>
                    <Button>Start Game</Button>
                </Menu>
            </PageContainer>
        </Wrapper>
    );
};
