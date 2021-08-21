import { mockData } from 'test/mockData';
import { addCardsToColumn } from '.';
import { IColumn } from 'interfaces';

describe('addCardsToColumn', () => {
    const { allColumns } = mockData;

    const targetColumn = allColumns[0];

    const movingCards = allColumns[1].cards;

    const updatedTargetColumn = addCardsToColumn(targetColumn as IColumn, movingCards, allColumns);

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
