import React from "react";

import { useGame } from "../hooks";
import { Wrapper, Header, Card, CardHolder, TopContainer } from "components";

import GlobalStyle from "styles/globalStyles";
import { GameArea, CardsWrapper, DeckContainer, CardContainer } from "./styled";

const Home: React.FC = () => {
  const { columns, source, moveCard } = useGame();

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
                <DeckContainer key={index + " 2"}>
                  {column.cards.map((card) => (
                    <CardContainer
                      id={card.id}
                      key={card.id}
                      onClick={() => moveCard(card, column)}
                    >
                      <Card
                        card={card}
                        isSelected={
                          !!source?.cards.find(
                            (movingCard) => movingCard.id === card.id
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
