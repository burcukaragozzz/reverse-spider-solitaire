import { useEffect, useReducer } from "react";
import { shuffle } from "lodash";
import { ICard, IColumn, ISource, ITarget } from "interfaces";

import { GameContext } from "./context";
import { GameReducer } from "./reducer";
import {
  removeCardFromColumn,
  addCardToColumn,
  generateCards,
  flipLastCard,
  dealCards,
  dealRemainingCards,
  checkIsSequence,
  checkIsGreaterOneRank,
} from "./helpers";
import { GameActions } from "./types";

export const GameProvider = (props) => {
  const [state, dispatch] = useReducer(GameReducer, {
    columns: [],
    source: null,
    destination: null,
    remainingCards: [],
    completedSequences: Array(8).fill([]),
  });

  const { source, columns, remainingCards, target, completedSequences } = state;

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
    dispatch({
      type: GameActions.SET_SOURCE,
      payload: source,
    });
  };

  const setTarget = (target: ITarget | null) => {
    dispatch({
      type: GameActions.SET_TARGET,
      payload: target,
    });
  };

  const getMovingCards = (selectedCard: ICard, column: IColumn) => {
    const selectedCardIndex = column.cards.findIndex(
      (card) => selectedCard.id === card.id
    );

    return column.cards.slice(selectedCardIndex);
  };

  const checkCanMove = () => {
    const [targetCard] = target.column.cards.slice(-1);

    // const isSequence = checkIsSequence(source);

    const isContinous = checkIsGreaterOneRank(targetCard, source.cards[0]);

    // return isSequence && isContinous;
    return isContinous;
  };

  const setUpdatedColumns = () => {
    const columnsCopy = [...columns];

    const updatedSourceColumn = removeCardFromColumn(source, columnsCopy);

    flipLastCard(updatedSourceColumn, columnsCopy);

    addCardToColumn(source.cards, target.column, columnsCopy);

    dispatch({ type: GameActions.SET_COLUMNS, payload: columnsCopy });
  };

  // * premimum: move(item, source, destination)
  // selectCard
  const moveCard = (selectedCard: ICard, selectedColumn: IColumn) => {
    if (source) {
      if (source.column.id === selectedColumn.id) {
        return setSource(null);
      }

      setTarget({ card: selectedCard, column: selectedColumn });
    } else {
      const cards = getMovingCards(selectedCard, selectedColumn);

      const isSequence = checkIsSequence({
        cards,
        column: selectedColumn,
      });

      if (isSequence) {
        setSource({ cards, column: selectedColumn });
      } else {
        alert("NOT a sequence!");
      }
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

  useEffect(() => {
    if (target) {
      const canMove = checkCanMove();

      if (canMove) {
        setUpdatedColumns();
      } else {
        alert("You cannot move!");
      }

      setTarget(null);
      setSource(null);
    }
  }, [target]);

  const contextValue = {
    ...state,
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
