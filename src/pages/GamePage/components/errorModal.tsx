import React from 'react';

import { useGame } from 'hooks';
import { Modal } from 'components';
import { GameActions } from 'contexts/game/types';

export const ErrorModal: React.FC = () => {
    const { error, dispatch } = useGame();

    return error ? (
        <Modal
            title="Warning"
            onConfirm={() => {
                dispatch({ type: GameActions.SET_ERROR, payload: '' });
            }}
        >
            {error}
        </Modal>
    ) : null;
};
