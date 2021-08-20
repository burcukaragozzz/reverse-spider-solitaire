import { MockData } from 'test/mockData';
import { checkIsLessOneRank } from '.';

describe('checkIsLessOneRank', () => {
    const { allColumns } = MockData;

    const targetCard = allColumns[0].cards[1];
    test('Check with correct parameters that the target card is one rank less than the source card', () => {
        const sourceCard = allColumns[1].cards[1];

        const sonuc = checkIsLessOneRank(targetCard, sourceCard);

        expect(sonuc).toEqual(true);
    });

    test('Should return false when checked with wrong parameters', () => {
        const sourceCard = { rank: 5, isDown: true };

        const sonuc = checkIsLessOneRank(targetCard, sourceCard);

        expect(sonuc).toEqual(false);
    });
});
