import React from 'react';

import { SuitBox, Suit } from './styled';

export type Props = {
    suit: string;
    onClick: VoidFunction;
    isSelected?: boolean;
};

export const SuitCard: React.FC<Props> = ({ suit, isSelected, onClick }) => {
    return (
        <SuitBox suit={suit} onClick={onClick}>
            <Suit isSelected={isSelected} src={`/images/${suit}/${suit}_1.png`} />
        </SuitBox>
    );
};
