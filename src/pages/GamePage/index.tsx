import React, { useEffect } from 'react';

import { useGame } from 'hooks';
import { ControlPanel, CustomDragLayer } from 'components';

import { PageContainer } from './styled';
import { ErrorModal, GameOver, Table, TopContainer } from './components';

export const GamePage: React.FC = () => {
    const { restartGame } = useGame();

    useEffect(() => {
        return () => restartGame();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <PageContainer>
            <TopContainer />
            <CustomDragLayer />
            <Table />
            <ControlPanel />
            <ErrorModal />
            <GameOver />
        </PageContainer>
    );
};
