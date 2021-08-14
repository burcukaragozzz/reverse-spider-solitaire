import React from 'react';

import { SuitBox, Suit } from './styled';

export type Props = {
    suit: string;
};

export const SuitCard: React.FC<Props> = ({ suit }) => {
    return (
        <SuitBox suit={suit}>
            <Suit src={`/images/${suit}.png`} />
        </SuitBox>
    );
};
