import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useGame } from 'hooks';
import { Button, SuitCard } from 'components';
import { GameActions } from 'contexts/game/types';

import { PageContainer, Menu, SuitsContainer } from './styled';
import { useTheme } from 'definitions/styled-components';

export const HomePage: React.FC = () => {
    const { dispatch } = useGame();
    const { themeName } = useTheme();

    const suits = ['spade', 'diamond', 'club', 'heart'];

    const [selectedSuit, setSuit] = useState('');

    const startGameWithSuit = () => {
        selectedSuit
            ? dispatch({ type: GameActions.SET_SUIT, payload: selectedSuit })
            : alert('suit seç bakalım aslan parçası');
    };

    return (
        <PageContainer themeName={themeName}>
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

                <Link to={selectedSuit ? `/game` : `/`}>
                    <Button onClick={() => startGameWithSuit()}>Start Game</Button>
                </Link>
            </Menu>
        </PageContainer>
    );
};
