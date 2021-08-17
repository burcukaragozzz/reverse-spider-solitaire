import { Button } from 'components';
import React, { ReactNode } from 'react';

import { ModalContainer, Header, ModalWrapper, Content, ButtonContainer } from './styled';

export type IModal = {
    onClick: VoidFunction;
    title?: string;
    buttonLabel?: string;
    closeButton?: ReactNode;
};

export const Modal: React.FC<IModal> = ({ children, onClick, title, buttonLabel, closeButton }) => {
    return (
        <ModalWrapper>
            <ModalContainer>
                <Header>{title}</Header>
                <Content>{children}</Content>
                <ButtonContainer>
                    <Button onClick={onClick}>{buttonLabel ? buttonLabel : 'OK'}</Button>
                    {closeButton}
                </ButtonContainer>
            </ModalContainer>
        </ModalWrapper>
    );
};
