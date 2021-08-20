import { dealRemainingCards } from '.';
import { MockData } from 'test/mockData';

describe('dealRemainingCards', () => {
    test('Deal remaining cards one for each column', () => {
        const { allColumns, remainingCards, updatedColumns } = MockData;

        const { columns, remainingCards: updatedRemainingCards } = dealRemainingCards(
            allColumns,
            remainingCards,
        );

        expect(columns).toEqual(updatedColumns);

        expect(updatedRemainingCards.length).toBe(0);
    });
});
