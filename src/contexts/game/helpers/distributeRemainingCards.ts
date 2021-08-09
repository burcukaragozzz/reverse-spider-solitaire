import { chunk } from 'lodash';

export const distributeRemainingCards = (cards) => {
    try {
        const remCards = chunk(cards, 10);

        return remCards;

    } catch (err) {
        console.log(err.message);
    }
}
