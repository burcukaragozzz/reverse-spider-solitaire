import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useGame } from 'hooks';
import { Button, SuitCard } from 'components';
import { GameActions } from 'contexts/game/types';

import { PageContainer, Menu, SuitsContainer } from './styled';

export const HomePage: React.FC = () => {
    const { dispatch } = useGame();

    const suits = ['spade', 'diamond', 'club', 'heart'];

    const [selectedSuit, setSuit] = useState('');

    const startGameWithSuit = () => {
        dispatch({ type: GameActions.SET_SUIT, payload: selectedSuit });
    };

    return (
        <PageContainer>
            <Menu>
                <SuitsContainer>
                    {suits.map((suit) => (
                        <SuitCard
                            key={suit}
                            suit={suit}
                            isSelected={suit === selectedSuit}
                            onClick={() => setSuit(suit)}
                        />
                    ))}
                </SuitsContainer>

                <Link to={`/game`}>
                    <Button onClick={() => startGameWithSuit()}>Start Game</Button>
                </Link>
            </Menu>
        </PageContainer>
    );
};
