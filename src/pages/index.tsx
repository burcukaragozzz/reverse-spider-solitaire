import React, { useState } from "react";

import { useGame } from "../hooks";
import { Wrapper, Header, Card, CardHolder } from "components";
import { ICard, IColumn } from "interfaces";

import GlobalStyle from "styles/globalStyles";
import {
  GameArea,
  TopContainer,
  CompletedDeckCards,
  CardsWrapper,
  DeckContainer,
  CardContainer,
  RemCardsContainer,
} from "./styled";

const Home: React.FC = () => {
  const { columns, source, moveCard, remainingCards, startNextTurn } =
    useGame();

  const [selectedId, setSelectedId] = useState("");

  const handleCardClick = (card: ICard, column: IColumn) => {
    setSelectedId(source ? "" : card.id);
    moveCard(card, column);
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <GameArea>
        <TopContainer>
          <RemCardsContainer>
            {remainingCards?.map((cards) => (
              <CardHolder isRemainingCard={true} onClick={startNextTurn} />
            ))}
          </RemCardsContainer>
          <CompletedDeckCards>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_) => (
              <CardHolder />
            ))}
          </CompletedDeckCards>
        </TopContainer>
        <CardsWrapper>
          {columns.map((column, index) => (
            <>
              {column.cards.length === 0 ? (
                <CardContainer>
                  <CardHolder />
                </CardContainer>
              ) : (
                <DeckContainer key={index + " 2"}>
                  {column.cards.map((card) => (
                    <CardContainer
                      id={card.id}
                      key={card.id}
                      onClick={() => handleCardClick(card, column)}
                    >
                      <Card
                        card={card}
                        isSelected={card.id === selectedId}
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
