import React from "react";
import { useGame } from "hooks";
import { CardHolder } from "components";

import { Container, RemCardsContainer, CompletedDeckCards } from "./styled";

export const TopContainer = () => {
  const { startNextTurn, remainingCards, completedSequences } = useGame();

  return (
    <Container>
      <RemCardsContainer>
        {remainingCards?.map(() => (
          <CardHolder
            onClick={startNextTurn}
            imageUrl="/images/card_back.png"
          />
        ))}
      </RemCardsContainer>

      <CompletedDeckCards>
        {completedSequences.map(() => (
          <CardHolder />
        ))}
      </CompletedDeckCards>
    </Container>
  );
};
