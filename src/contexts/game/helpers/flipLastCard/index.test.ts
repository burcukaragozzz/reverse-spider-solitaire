import { ICard } from 'interfaces';
import { flipLastCard } from '.';

const createMockColumns = () => {
    return [
        { id: 1, cards: [{ rank: 1, isDown: true }, { rank: 2, isDown: true } as ICard] },
        { id: 2, cards: [{ rank: 3, isDown: true }, { rank: 4, isDown: true } as ICard] },
    ];
};

describe('flipLastCard', () => {
    test('Flips last remaining card from source column', () => {
        const allColumns = createMockColumns();

        flipLastCard(2, allColumns);

        const targetColumn = allColumns[1];

        expect(targetColumn.cards[1].isDown).toEqual(false);
    });
});
