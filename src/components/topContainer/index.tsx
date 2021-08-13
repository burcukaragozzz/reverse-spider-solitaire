import React from 'react';
import { useGame } from 'hooks';
import { CardHolder } from 'components';

import { Container, RemCardsContainer, CompletedDeckCards } from './styled';

export const TopContainer = () => {
    const { startNextTurn, remainingCards, completedSequences } = useGame();

    return (
        <Container>
            <RemCardsContainer>
                {remainingCards.map((_, index) => (
                    <CardHolder
                        key={`r-${index}`}
                        onClick={startNextTurn}
                        imageUrl="/images/card_back.png"
                    />
                ))}
            </RemCardsContainer>

            <CompletedDeckCards>
                {completedSequences.map((_, index) => (
                    <CardHolder
                        key={`c-${index}`}
                        onClick={startNextTurn}
                        imageUrl="/images/card_back.png"
                    />
                ))}
            </CompletedDeckCards>
        </Container>
    );
};
