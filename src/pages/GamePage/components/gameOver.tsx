import React from 'react';
import { useHistory } from 'react-router-dom';

import { useGame } from 'hooks';
import { Fireworks, Modal } from 'components';

import gameoverAudio from 'assets/sounds/gameover.mp3';

export const GameOver: React.FC = () => {
    const { completedSequences, restartGame, score } = useGame();

    const isGameOver = completedSequences.filter((sequence) => sequence === 1).length === 8;

    isGameOver && new Audio(gameoverAudio).play();

    const history = useHistory();

    return (
        isGameOver && (
            <>
                <Fireworks />
                <Modal
                    title="CONGRATULATIONS!"
                    confirmLabel="Start a New Game"
                    onConfirm={() => {
                        restartGame();
                        history.push('/');
                    }}
                >
                    You completed the game with {score} scores.
                </Modal>
            </>
        )
    );
};
