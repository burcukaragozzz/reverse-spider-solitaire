import React, { useState } from "react";

import { useGame } from "../hooks";
import { Wrapper, Header, Card } from "components";
import { ICard, IColumn } from "interfaces";

import GlobalStyle from "styles/globalStyles";
import { CardsContainer, DeckContainer, CardWrapper } from "./styled";

const Home: React.FC = () => {

  const { columns, source, moveCard } = useGame();

  const [selectedId, setSelectedId] = useState("");

  const handleCardClick = (card: ICard, column: IColumn) => {
    setSelectedId(source ? "" : card.id)
    moveCard(card, column);
  }

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
                    onClick={() => handleCardClick(card, column)}
                  >
                    <Card
                      card={card}
                      isSelected={card.id === selectedId}
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
