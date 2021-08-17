import { Button } from 'components';
import React from 'react';

import { ModalContainer, Header, ModalWrapper, Content } from './styled';

export type IModal = {
    onClick?: VoidFunction;
    title?: string;
};

export const Modal: React.FC<IModal> = ({ children, onClick, title }) => {
    return (
        <ModalWrapper>
            <ModalContainer onClick={onClick}>
                <Header>{title}</Header>
                <Content>{children}</Content>
                <Button>OK</Button>
            </ModalContainer>
        </ModalWrapper>
    );
};
