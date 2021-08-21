import { ICard, IColumn } from 'interfaces';
import { dealRemainingCards } from '.';

describe('dealRemainingCards', () => {
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
    ] as IColumn[];

    const remainingCards = [
        [
            { rank: 7, isDown: false },
            { rank: 5, isDown: false },
        ],
    ] as ICard[][];

    const { columns, remainingCards: updatedRemainingCards } = dealRemainingCards(
        allColumns,
        remainingCards,
    );

    test('Successfully deal the remaining cards, one for each column', () => {
        expect(columns).toEqual([
            {
                id: 1,
                cards: [
                    { rank: 1, isDown: true },
                    { rank: 3, isDown: true },
                    { rank: 7, isDown: false },
                ],
            },
            {
                id: 2,
                cards: [
                    { rank: 4, isDown: true },
                    { rank: 4, isDown: true },
                    { rank: 5, isDown: false },
                ],
            },
        ]);

        expect(columns[0].cards.length).toBe(3);
    });

    test('Check the number of remaining cards', () => {
        expect(updatedRemainingCards.length).toBe(0);
    });
});
