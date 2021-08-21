import { generateCards } from '../generateCards';

import { dealCards } from '.';

describe('dealCards', () => {
    const cards = generateCards();

    const { columns, remainingCards } = dealCards(cards);

    test('Successfully distributed the number of cards in the columns', () => {
        const columsOf6 = columns.slice(0, 4);
        const columsOf5 = columns.slice(4);

        columsOf6.forEach((column) => {
            expect(column.cards.length).toBe(6);
        });

        columsOf5.forEach((column) => {
            expect(column.cards.length).toBe(5);
        });
    });

    test('Flip the last card in each columns', () => {
        columns.forEach(({ cards }) => {
            expect(cards[cards.length - 1].isDown).toEqual(false);
        });
    });

    test('Check the length of the remaining cards to be dealt is kept in sets of 10', () => {
        expect(remainingCards.length).toBe(5);

        remainingCards.map((cards) => {
            expect(cards.length).toBe(10);
        });
    });
});
