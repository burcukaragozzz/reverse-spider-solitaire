import { chunk } from 'lodash';

import { ICard } from 'interfaces';

export const dealCards = (cards: ICard[]) => {
    try {
        const chunks = chunk(cards.slice(0, 50), 5);

        const columns = chunks.map((cards, index) => ({
            id: index,
            cards,
        }));

        cards.slice(50, 54).forEach((card, index) => columns[index].cards.push(card));

        const remainingCards = chunk(cards.slice(54), 10);

        columns.forEach(({ cards }, index) => {
            if (index !== 10) cards[cards.length - 1].isDown = false;
        });

        return { columns, remainingCards };
    } catch (err) {
        console.log(err.message);
    }
};
