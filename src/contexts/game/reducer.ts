import { GameActions } from "./types";

export const GameReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GameActions.SET_COLUMNS_AND_REMAINING_CARDS:
      return {
        ...state,
        columns: payload.columns,
        remainingCards: payload.remainingCards
      }
    case GameActions.SET_SOURCE:
      return {
        ...state,
        source: payload
      }
    case GameActions.SET_TARGET:
      return {
        ...state,
        target: payload
      }
    case GameActions.SET_COLUMNS:
      return {
        ...state,
        columns: payload,
      }
    default:
      return state;
  }
};
