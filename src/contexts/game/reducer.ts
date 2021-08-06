import { SET_DECKS } from "./types";

export const GameReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_DECKS:
      return {
        ...state,
        decks: payload
      }
    default:
      return state;
  }
};
