import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useGame } from 'hooks';
import { Button, Modal, SuitCard } from 'components';
import { GameActions } from 'contexts/game/types';

import { PageContainer, Menu, SuitsContainer, ButtonsContainer, RulesButton, Icon } from './styled';
import { useTheme } from 'definitions/styled-components';

export const HomePage: React.FC = () => {
    const { dispatch } = useGame();
    const { themeName } = useTheme();

    const suits = ['spade', 'diamond', 'club', 'heart'];

    const [selectedSuit, setSuit] = useState('');
    const [isOpenSelectSuitModel, setIsOpenSelectSuitModel] = useState(false);

    const startGameWithSuit = () => {
        selectedSuit
            ? dispatch({ type: GameActions.SET_SUIT, payload: selectedSuit })
            : setIsOpenSelectSuitModel(true);
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

                <ButtonsContainer>
                    <Link to={selectedSuit ? `/game` : `/`}>
                        <Button onClick={() => startGameWithSuit()}>Start Game</Button>
                    </Link>
                </ButtonsContainer>
                <Link to={'/rules'}>
                    <RulesButton>
                        <Icon src={'/icons/rules-icon.png'} width={36} />
                        Rules
                    </RulesButton>
                </Link>

                {isOpenSelectSuitModel && (
                    <Modal title="Welcome" onConfirm={() => setIsOpenSelectSuitModel(false)}>
                        Please select the suit you want to continue to start the game.
                    </Modal>
                )}
            </Menu>
        </PageContainer>
    );
};
