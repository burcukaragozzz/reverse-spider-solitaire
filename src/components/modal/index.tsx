import { Button } from 'components';
import React, { ReactNode } from 'react';

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
        <ModalWrapper>
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
