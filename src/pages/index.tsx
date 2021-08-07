import React from "react";

import { useGame } from "../hooks";
import { Wrapper, Header, Card } from "components";

import GlobalStyle from "styles/globalStyles";
import { CardsContainer, DeckContainer, CardWrapper } from "./styled";

const Home: React.FC = () => {

  const { columns, moveCard } = useGame();

  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <CardsContainer>
        {columns.map((column, index) => (
          <>
            {column.cards.length === 0 ? (
              // <div
              //   id="holder"
              //   key={index + "0"}
              //   onClick={() => {
              //     selectCard("", column, true, game, setgame);
              //   }}
              // >
              //   <CardHolder key={index + " 1"} deck={deck} />
              // </div>
              <span>card holder yapılacak</span>
            ) : (
              <DeckContainer key={index + " 2"} className="decks-container">
                {column.cards.map((card) => (
                  <CardWrapper
                    id={card.id}
                    key={card.id}
                    onClick={() => moveCard(card, column)}
                  >
                    <Card
                      card={card}
                      isSelected={card.isSelected}
                      isDown={card.isDown}
                      isHighlighted={card.isHighlighted}
                    />
                  </CardWrapper>
                ))}
              </DeckContainer>
            )}
          </>
        ))}
      </CardsContainer>

    </Wrapper>
  );
};
export default Home;
