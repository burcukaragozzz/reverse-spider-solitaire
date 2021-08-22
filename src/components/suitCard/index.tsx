import React from 'react';

import { SuitBox, Suit } from './styled';

export type Props = {
    id: number;
    suit: string;
    onClick: VoidFunction;
    isSelected?: boolean;
};

export const SuitCard: React.FC<Props> = ({ id, suit, isSelected, onClick }) => {
    return (
        <SuitBox id={suit + id} suit={suit} onClick={onClick} data-testid="suit-card">
            <Suit isSelected={isSelected} src={`/images/${suit}/${suit}_1.png`} />
        </SuitBox>
    );
};
