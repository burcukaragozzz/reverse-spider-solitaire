import { chunk } from 'lodash';

export const dealCards = (cards) => {
    try {
        const chunks = chunk(cards.slice(0, 50), 5);

        const columns = chunks.map((cards, index) => ({
            id: index,
            cards
        }));

        cards.slice(50, 54).forEach((card, index) => columns[index].cards.push(card));

        const remaining = cards.slice(54); // 50 dağıtılacak olan

        columns.forEach(({ cards }, index) => {
            if (index !== 10) cards[cards.length - 1].isDown = false;
        });

        return { columns, remaining };

    } catch (err) {
        console.log(err.message);
    }
}
