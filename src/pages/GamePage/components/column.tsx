import React from 'react';
import { useDrop } from 'react-dnd';

import { useGame } from 'hooks';
import { DragItem, IColumn, ISource, ITarget } from 'interfaces';

import { DeckContainer } from '../styled';

type ColumnProps = {
    column: IColumn;
};

export const Column: React.FC<ColumnProps> = ({ children, column }) => {
    const { move } = useGame();

    const [_, drop] = useDrop({
        accept: DragItem.Card,
        drop: (source: ISource) => {
            const target: ITarget = { column };

            move(source, target);
        },
    });

    return <DeckContainer ref={drop}>{children}</DeckContainer>;
};
