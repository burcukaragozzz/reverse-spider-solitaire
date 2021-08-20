import { dealRemainingCards } from '.';
import { MockData } from 'test/mockData';

describe('dealRemainingCards', () => {
    const { allColumns, remainingCards, updatedColumns } = MockData;

    const { columns, remainingCards: updatedRemainingCards } = dealRemainingCards(
        allColumns,
        remainingCards,
    );

    test('Successfully deal the remaining cards, one for each column', () => {
        expect(columns).toEqual(updatedColumns);

        // remainingCards.forEach((card, index) => {
        //     const isExistent = allColumns[index].cards.find((c) => c.rank === card.rank);
        //     expect(isExistent).toBeTruthy();
        // });
    });
    test('Check the number of remaining cards', () => {
        expect(updatedRemainingCards.length).toBe(0);
    });
});
