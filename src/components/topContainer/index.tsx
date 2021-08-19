import React from 'react';
import { useGame } from 'hooks';
import { CardHolder } from 'components';

import { Container, RemCardsContainer, CompletedDeckCards } from './styled';

export const TopContainer = () => {
    const { startNextTurn, remainingCards, completedSequences, suit } = useGame();

    return (
        <Container>
            <RemCardsContainer>
                {remainingCards.map((_, index) => (
                    <CardHolder
                        key={`r-${index}`}
                        onClick={startNextTurn}
                        imageUrl="/images/card_back.png"
                        style={{
                            marginLeft: '-50px',
                        }}
                    />
                ))}
            </RemCardsContainer>

            <CompletedDeckCards>
                {completedSequences
                    .sort((a, b) => a - b)
                    .map((completed, index) =>
                        completed ? (
                            <CardHolder
                                key={`c-${index}`}
                                imageUrl={`/images/${suit}/${suit}_1.png`}
                            />
                        ) : (
                            <CardHolder key={`c-${index}`} />
                        ),
                    )}
            </CompletedDeckCards>
        </Container>
    );
};
