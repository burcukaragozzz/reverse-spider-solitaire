import { MockData } from 'test/mockData';
import { checkIsSequence } from '.';

describe('checkIsSequence', () => {
    const { allColumns } = MockData;

    test('doğru', () => {
        const cards = allColumns[2].cards;

        const sonuc = checkIsSequence(cards);

        expect(sonuc).toEqual(true);
    });

    test('yanlış', () => {
        const cards = allColumns[0].cards;

        const sonuc = checkIsSequence(cards);

        expect(sonuc).toEqual(false);
    });
});
