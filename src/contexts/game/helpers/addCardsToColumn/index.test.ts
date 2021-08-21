import { ICard, IColumn } from 'interfaces';
import { addCardsToColumn } from '.';

describe('addCardsToColumn', () => {
    const allColumns = [
        {
            id: 1,
            cards: [
                { rank: 1, isDown: true },
                { rank: 3, isDown: true },
            ],
        },
        {
            id: 2,
            cards: [
                { rank: 4, isDown: true },
                { rank: 4, isDown: true },
            ],
        },
    ];

    const targetColumn = allColumns[0];

    const movingCards = allColumns[1].cards;

    const updatedTargetColumn = addCardsToColumn(
        targetColumn as IColumn,
        movingCards as ICard[],
        allColumns as IColumn[],
    );

    test('Successfully adds the selected cards to the target column', () => {
        expect(allColumns[0].cards.length).toBe(4);
    });

    test('Each moving card exists in target column', () => {
        movingCards.forEach((card) => {
            const isExistent = updatedTargetColumn.cards.find((c) => c.rank === card.rank);
            expect(isExistent).toBeTruthy();
        });
    });
});
