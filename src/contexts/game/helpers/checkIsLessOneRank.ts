import { ICard } from 'interfaces';

export const checkIsLessOneRank = (card: ICard, comparee: ICard) => {
    return comparee.rank - card.rank === 1;
};
