import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, Modal, Timer } from 'components';

import { PanelContainer, BackButton, Icon, RightSide, Section, Text } from './styled';

export const ControlPanel: React.FC = () => {
    const [isOpenModel, setIsOpenModal] = useState(false);
    const [isExit, setIsExit] = useState(false);

    return (
        <Link to={isExit && '/'}>
            <>
                <PanelContainer>
                    <BackButton
                        onClick={() => {
                            setIsOpenModal(true);
                        }}
                    >
                        <Icon src={'/icons/left-arrow.png'} width={36} />
                        Back Home
                    </BackButton>

                    <RightSide>
                        <Section>
                            <Icon src={'/icons/award.png'} width={36} />
                            <Text>Score :</Text>
                            {'65'}
                        </Section>
                        <Section>
                            <Icon src={'/icons/timer.png'} width={36} />
                            <Text>Timer :</Text>
                            <Timer />
                        </Section>
                    </RightSide>
                </PanelContainer>
                {isOpenModel && (
                    <Modal
                        title="Warning"
                        buttonLabel="YES"
                        onClick={() => {
                            setIsExit(true);
                            console.log(isExit);
                        }}
                        closeButton={<Button onClick={() => setIsOpenModal(false)}>NO</Button>}
                    >
                        If you come back the game will be over. Are you sure want to come back?
                    </Modal>
                )}
            </>
        </Link>
    );
};
