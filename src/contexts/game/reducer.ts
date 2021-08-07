import { GameActions } from "./types";

export const GameReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GameActions.SET_SOURCE:
      return {
        ...state,
        source: payload
      }
    case GameActions.SET_COLUMNS:
      return {
        ...state,
        columns: payload
      }
    default:
      return state;
  }
};
