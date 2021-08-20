import { generateCards } from '../generateCards';

import { dealCards } from '.';

describe('dealCards', () => {
    const cards = generateCards();

    const { columns, remainingCards } = dealCards(cards);

    test('Successfully distributed the number of cards in the columns', () => {
        columns.forEach((column, index) => {
            if (index > 3) {
                expect(column.cards.length).toBe(5);
            } else {
                expect(column.cards.length).toBe(6);
            }
        });
    });

    test('Flip the last card in each columns', () => {
        columns.forEach(({ cards }, index) => {
            if (index !== 10) {
                expect(cards[cards.length - 1].isDown).toEqual(false);
            }
        });
    });

    test('Check the length of the remaining cards to be dealt is kept in sets of 10', () => {
        remainingCards.map((cards) => {
            expect(cards.length).toBe(10);
        });
    });
});
