import { MockData } from 'test/mockData';
import { addCardsToColumn } from '.';

describe('addCardsToColumn', () => {
    const { allColumns } = MockData;

    const targetColumn = allColumns[0];

    const movingCards = allColumns[1].cards;

    const updatedTargetColumn = addCardsToColumn(targetColumn, movingCards, allColumns);

    test('Successfully adds the selected cards to the target column', () => {
        expect(allColumns[0].cards.length).toBe(4);
    });

    test('bilemedim test adı ne olsun', () => {
        movingCards.forEach((card) => {
            const isExistent = updatedTargetColumn.cards.find((c) => c.rank === card.rank);
            expect(isExistent).toBeTruthy();
        });
    });
});
