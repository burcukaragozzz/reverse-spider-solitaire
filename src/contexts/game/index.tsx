import { Dispatch, useEffect, useReducer } from "react";
import { shuffle, chunk } from "lodash";
import { ICard, IColumn, ISource } from "interfaces";

import { GameContext } from "./context";
import { GameReducer } from "./reducer";
import {
  removeCardFromColumn,
  addCardToColumn,
  generateCards,
  flipLastCard,
  dealCards,
  dealRemainingCards,
} from "./helpers";
import { GameActions } from "./types";

export const GameProvider = (props) => {
  const [state, dispatch] = useReducer(GameReducer, {
    columns: [],
    source: null,
    remainingCards: [],
  });

  const { source, columns, remainingCards } = state;

  const initializeState = () => {
    const cards = generateCards();

    const shuffledCards = shuffle(cards);

    const { columns, remainingCards } = dealCards(shuffledCards);

    dispatch({
      type: GameActions.SET_COLUMNS_AND_REMAINING_CARDS,
      payload: { columns, remainingCards },
    });
  };

  const setSource = (source: ISource | null) => {
    dispatch({ type: GameActions.SET_SOURCE, payload: source });
  };

  // * premimum: move(item, source, destination)
  const moveCard = (selectedCard: ICard, selectedColumn: IColumn) => {
    if (source) {
      const [lastCard] = selectedColumn.cards.slice(-1);

      const canMove = lastCard.rank.value - source.card.rank.value === 1;

      if (canMove) {
        const columnsCopy = [...columns];
        const updatedSourceColumn = removeCardFromColumn(source, columnsCopy);

        flipLastCard(updatedSourceColumn, columnsCopy);

        addCardToColumn(source.card, selectedColumn, columnsCopy);

        dispatch({ type: GameActions.SET_COLUMNS, payload: columnsCopy });
      }

      setSource(null);
    } else {
      setSource({ card: selectedCard, column: selectedColumn });
    }
  };

  const startNextTurn = () => {
    dispatch({
      type: GameActions.SET_COLUMNS_AND_REMAINING_CARDS,
      payload: dealRemainingCards(columns, remainingCards),
    });
  };

  useEffect(() => {
    initializeState();
  }, []);

  const contextValue = {
    ...state,
    setSource,
    moveCard,
    startNextTurn,
    dispatch,
  };

  return (
    <GameContext.Provider value={contextValue}>
      {props.children}
    </GameContext.Provider>
  );
};
