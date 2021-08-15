import React from 'react';

import { SuitBox, Suit } from './styled';

export type Props = {
    suit: string;
    onClick: VoidFunction;
};

export const SuitCard: React.FC<Props> = ({ suit, onClick }) => {
    return (
        <SuitBox suit={suit} onClick={onClick}>
            <Suit src={`/images/${suit}/${suit}_1.png`} />
        </SuitBox>
    );
};
