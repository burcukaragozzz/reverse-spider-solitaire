import React from 'react';

import { Button } from 'components';
import { ModalContainer, Header, ModalWrapper, Content, ButtonContainer } from './styled';

export type IModal = {
    onConfirm: VoidFunction;
    title?: string;
    confirmLabel?: string;
    rejectLabel?: string;
    onReject?: VoidFunction;
};

export const Modal: React.FC<IModal> = ({
    children,
    onConfirm,
    title,
    confirmLabel,
    rejectLabel,
    onReject,
}) => {
    return (
        <ModalWrapper id="modal">
            <ModalContainer>
                <Header>{title}</Header>
                <Content>{children}</Content>
                <ButtonContainer>
                    <Button onClick={onConfirm}>{confirmLabel ? confirmLabel : 'OK'}</Button>
                    {onReject && (
                        <Button onClick={onReject}>{rejectLabel ? rejectLabel : 'CANCEL'}</Button>
                    )}
                </ButtonContainer>
            </ModalContainer>
        </ModalWrapper>
    );
};
