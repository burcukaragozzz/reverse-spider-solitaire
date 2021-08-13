import { useContext } from 'react';

import { GameContext } from 'contexts/game/context';

export const useGame = () => useContext(GameContext);
