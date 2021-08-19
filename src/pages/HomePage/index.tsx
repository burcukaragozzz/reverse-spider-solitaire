import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useGame } from 'hooks';
import { Button, Modal, SuitCard } from 'components';
import { GameActions } from 'contexts/game/types';

import { PageContainer, Menu, SuitsContainer, ButtonsContainer, RulesButton, Icon } from './styled';

export const HomePage: React.FC = () => {
    const { dispatch } = useGame();
    const history = useHistory();

    const suits = ['spade', 'diamond', 'club', 'heart'];

    const [selectedSuit, setSuit] = useState('');
    const [isOpenSelectSuitModel, setIsOpenSelectSuitModel] = useState(false);

    const startGameWithSuit = () => {
        selectedSuit
            ? dispatch({ type: GameActions.SET_SUIT, payload: selectedSuit })
            : setIsOpenSelectSuitModel(true);

        history.push(selectedSuit ? `/game` : `/`);
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

                <ButtonsContainer>
                    <Button onClick={() => startGameWithSuit()}>Start Game</Button>
                </ButtonsContainer>
                <Link to={'/rules'}>
                    <RulesButton>
                        <Icon src={'/icons/rules-icon.png'} width={36} />
                        Rules
                    </RulesButton>
                </Link>
            </Menu>

            {isOpenSelectSuitModel && (
                <Modal title="Welcome" onConfirm={() => setIsOpenSelectSuitModel(false)}>
                    Please select the suit you want to continue to start the game.
                </Modal>
            )}
        </PageContainer>
    );
};
