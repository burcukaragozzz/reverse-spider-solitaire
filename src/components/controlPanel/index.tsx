import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useGame } from 'hooks';
import { Modal, Timer } from 'components';
import { TransparentButton } from 'definitions/styled-components';

import { PanelContainer, Icon, RightSide, Section } from './styled';

export const ControlPanel: React.FC = () => {
    const { score } = useGame();
    const [isOpenModel, setIsOpenModal] = useState(false);

    const history = useHistory();

    return (
        <>
            <PanelContainer>
                <TransparentButton
                    onClick={() => {
                        setIsOpenModal(true);
                    }}
                >
                    <Icon src={'/icons/left-arrow.png'} width={36} />
                    Back Home
                </TransparentButton>

                <RightSide>
                    <Section>
                        <Icon src={'/icons/award.png'} width={36} />
                        Score : {score}
                    </Section>
                    <Section>
                        <Icon src={'/icons/timer.png'} width={36} />
                        <Timer />
                    </Section>
                </RightSide>
            </PanelContainer>
            {isOpenModel && (
                <Modal
                    title="Warning"
                    confirmLabel="YES"
                    rejectLabel="NO"
                    onConfirm={() => {
                        history.push('/');
                    }}
                    onReject={() => setIsOpenModal(false)}
                >
                    If you come back the game will be over. Are you sure want to come back?
                </Modal>
            )}
        </>
    );
};
