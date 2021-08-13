import React from 'react';

import { useGame } from 'hooks';
import { ICard, IColumn } from 'interfaces';
import GlobalStyle from 'styles/globalStyles';
import { Wrapper, Header, Card, CardHolder, TopContainer } from 'components';

import { GameArea, CardsWrapper, DeckContainer, CardContainer } from './styled';

const Home: React.FC = () => {
    const { columns, source, setTargetSafely, setSourceSafely } = useGame();

    const handleCardClick = (selectedColumn: IColumn, selectedCard: ICard) => {
        if (source) {
            setTargetSafely(selectedColumn);
        } else {
            setSourceSafely(selectedColumn, selectedCard);
        }
    };

    return (
        <Wrapper>
            <GlobalStyle />
            <Header />
            <GameArea>
                <TopContainer />
                <CardsWrapper>
                    {columns.map((column, index) => (
                        <>
                            {column.cards.length === 0 ? (
                                <CardContainer>
                                    <CardHolder />
                                </CardContainer>
                            ) : (
                                <DeckContainer key={index + ' 2'}>
                                    {column.cards.map((card) => (
                                        <CardContainer
                                            id={card.id}
                                            key={card.id}
                                            onClick={() => handleCardClick(column, card)}
                                        >
                                            <Card
                                                card={card}
                                                isSelected={
                                                    !!source?.cards.find(
                                                        (movingCard) => movingCard.id === card.id,
                                                    )
                                                }
                                                isDown={card.isDown}
                                                isHighlighted={card.isHighlighted}
                                            />
                                        </CardContainer>
                                    ))}
                                </DeckContainer>
                            )}
                        </>
                    ))}
                </CardsWrapper>
            </GameArea>
        </Wrapper>
    );
};
export default Home;
