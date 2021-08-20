import { MockData } from 'test/mockData';

import { addCardsToColumn } from '../addCardsToColumn';

describe('addCardsToColumn', () => {
    test('Adds the given cards to the given column', () => {
        const { allColumns } = MockData;

        const targetColumn = allColumns[1];

        const movingCards = [{ rank: 2 }, { rank: 3 }];

        const updatedTargetColumn = addCardsToColumn(targetColumn, movingCards, allColumns);

        expect(updatedTargetColumn.cards.length).toBe(3);

        expect(allColumns[1].cards.length).toBe(3);

        movingCards.forEach((card) => {
            const isExistent = updatedTargetColumn.cards.find((c) => c.rank === card.rank);
            expect(isExistent).toBeTruthy();
        });
    });
});
