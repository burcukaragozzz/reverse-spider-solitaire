import { ICard, IColumn } from 'interfaces';

export const dealRemainingCards = (columns: IColumn[], remainingCards: ICard[][]) => {
    const [nextTurn, ...updatedRemainingCards] = remainingCards;

    const nextTurnCards = nextTurn.map((card) => ({
        ...card,
        isDown: false,
    }));

    const updatedColumns = columns.map((column, index) => ({
        ...column,
        cards: [...column.cards, nextTurnCards[index]],
    }));

    return {
        columns: updatedColumns,
        remainingCards: updatedRemainingCards,
    };
};
