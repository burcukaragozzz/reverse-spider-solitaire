import { dealRemainingCards } from '.';
import { mockData } from 'test/mockData';

describe('dealRemainingCards', () => {
    const { allColumns, remainingCards, updatedColumns } = mockData;

    const { columns, remainingCards: updatedRemainingCards } = dealRemainingCards(
        allColumns,
        remainingCards,
    );

    test('Successfully deal the remaining cards, one for each column', () => {
        expect(columns).toEqual(updatedColumns);

        expect(columns[0].cards.length).toBe(3);
    });
    test('Check the number of remaining cards', () => {
        expect(updatedRemainingCards.length).toBe(0);
    });
});
