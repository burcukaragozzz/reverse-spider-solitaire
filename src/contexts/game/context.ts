import { createContext } from "react";

import { GameState } from './types'

export const GameContext = createContext({} as GameState);
