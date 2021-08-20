export const MockData = {
    allColumns: [
        {
            id: 1,
            cards: [
                { rank: 1, isDown: true },
                { rank: 3, isDown: true },
            ],
        },
        {
            id: 2,
            cards: [
                { rank: 2, isDown: true },
                { rank: 4, isDown: true },
            ],
        },
    ],
    remainingCards: [
        [
            { rank: 8, isDown: true },
            { rank: 9, isDown: true },
        ],
    ],
    updatedColumns: [
        {
            id: 1,
            cards: [
                { rank: 1, isDown: true },
                { rank: 2, isDown: true },
                { rank: 8, isDown: false },
            ],
        },
        {
            id: 2,
            cards: [
                { rank: 3, isDown: true },
                { rank: 4, isDown: true },
                { rank: 9, isDown: false },
            ],
        },
    ],
};
