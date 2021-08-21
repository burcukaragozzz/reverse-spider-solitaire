import { ICard } from 'interfaces';

export const mockData = {
    allColumns: [
        {
            id: 1,
            cards: [{ rank: 1, isDown: true } as ICard, { rank: 3, isDown: true } as ICard],
        },
        {
            id: 2,
            cards: [{ rank: 4, isDown: true } as ICard, { rank: 4, isDown: true } as ICard],
        },
        {
            id: 3,
            cards: [{ rank: 4, isDown: true } as ICard, { rank: 5, isDown: true } as ICard],
        },
    ],
    remainingCards: [
        [
            { rank: 8, isDown: true } as ICard,
            { rank: 9, isDown: true } as ICard,
            { rank: 12, isDown: true } as ICard,
        ],
    ],
    updatedColumns: [
        {
            id: 1,
            cards: [
                { rank: 1, isDown: true } as ICard,
                { rank: 3, isDown: true } as ICard,
                { rank: 8, isDown: false } as ICard,
            ],
        },
        {
            id: 2,
            cards: [
                { rank: 4, isDown: true } as ICard,
                { rank: 4, isDown: true } as ICard,
                { rank: 9, isDown: false } as ICard,
            ],
        },
        {
            id: 3,
            cards: [
                { rank: 4, isDown: true } as ICard,
                { rank: 5, isDown: true } as ICard,
                { rank: 12, isDown: false } as ICard,
            ],
        },
    ],
};

// const generateMockCard = (rank, isDown): ICard => {
//     return { rank, isDown } as ICard;
// };
