import { MockData } from 'test/mockData';
import { checkIsLessOneRank } from '.';

describe('checkIsLessOneRank', () => {
    test('Check target card is less one rank source card', () => {
        const { allColumns } = MockData;

        const targetCard = allColumns[0].cards[1];
        const sourceCard = allColumns[1].cards[1];

        const sonuc = checkIsLessOneRank(targetCard, sourceCard);

        expect(sonuc).toEqual(true);
    });
});
