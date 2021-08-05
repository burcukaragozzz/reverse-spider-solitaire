import {
  GET_CARDS,
  GET_DECKS
} from "./types";

export const AppReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CARDS:
      return {
        ...state,
        cards: payload,
      };
    case GET_DECKS:
      return {
        ...state,
        decks: payload,
      };
    default:
      return state;
  }
};