import { MockData } from 'test/mockData';
import { removeCardsFromColumn } from '.';

describe('removeCardsFromColumn', () => {
    test('succesfully remove selected cards from source column', () => {
        const { allColumns } = MockData;

        const sourceColumn = allColumns[0];
        const cards = allColumns[0].cards;

        removeCardsFromColumn(sourceColumn, cards, allColumns);

        expect(allColumns[0].cards.length).toBe(0);
    });
});
