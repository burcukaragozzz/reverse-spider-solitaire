import React, { useEffect, useContext } from "react";
import { AppContext } from "context/appContext";
import { Wrapper, Header, Card } from "components";

import { CardsContainer, DeckContainer, CardStack } from "./styled";
import GlobalStyle from "styles/globalStyles";

const Home: React.FC = () => {

  const appContext = useContext(AppContext);

  const {getCards, getDecks, decks, cards} = appContext;

  useEffect(()=>{
    getCards();
    getDecks();
  },[]);

  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <CardsContainer>
      {console.log(cards)}
      {console.log("decks", decks)}

       {decks.slice(0, 10).map((deck, index) => (
          <>
            {deck.length == 0 ? (
              // <div
              //   id="holder"
              //   key={index + "0"}
              //   onClick={() => {
              //     selectCard("", deck, true, game, setgame);
              //   }}
              // >
              //   <CardHolder key={index + " 1"} deck={deck} />
              // </div>
              <span>card holder yapılacak</span>
            ) : (
              <DeckContainer key={index + " 2"} className="decks-container">
                {deck.map((card, key) => (
                  <CardStack
                    key={card.rank + " " + card.suit + " " + card.deck}
                    id={card.rank + " " + card.suit + " " + card.deck}
                  >
                    <Card
                      key={card.rank + " " + card.suit + " " + card.deck}
                      card={card}
                      isSelected={card.isSelected}
                      isDown={card.isDown}
                      isHighlighted={card.isHighlighted}
                    />
                  </CardStack>
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
