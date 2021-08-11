import { useEffect, useReducer } from "react";
import { shuffle } from "lodash";
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
    completedSequences: Array(8).fill([]),
  });

  const { source, columns, remainingCards, completedSequences } = state;

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
      const { isSequence } = source.cards
        .map((card) => card.rank.value)
        .reduce(
          (acc, curr) => {
            const is = acc?.value ? acc.value - curr === 1 : true;

            return {
              isSequence: acc.isSequence && is,
              value: curr,
            };
          },
          {
            isSequence: true,
          }
        );

      console.log({ isSequence });

      const targetColumn = selectedColumn;

      const [targetCard] = targetColumn.cards.slice(-1);

      const isContinous =
        targetCard.rank.value - source.cards[0].rank.value === 1;

      const canMove = isSequence && isContinous;

      if (canMove) {
        const columnsCopy = [...columns];

        const updatedSourceColumn = removeCardFromColumn(source, columnsCopy);

        flipLastCard(updatedSourceColumn, columnsCopy);

        addCardToColumn(source.cards, selectedColumn, columnsCopy);

        dispatch({ type: GameActions.SET_COLUMNS, payload: columnsCopy });
      } else {
        alert(`isSequence: ${isSequence}, isContinous: ${isContinous}`);
      }

      setSource(null);
    } else {
      const selectedCardIndex = selectedColumn.cards.findIndex(
        (card) => card.id === selectedCard.id
      );

      const cards = selectedColumn.cards.slice(selectedCardIndex);

      setSource({ cards, column: selectedColumn });
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
