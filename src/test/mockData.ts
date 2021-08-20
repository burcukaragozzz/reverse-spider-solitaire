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
                { rank: 4, isDown: true },
                { rank: 4, isDown: true },
            ],
        },
        {
            id: 3,
            cards: [
                { rank: 4, isDown: true },
                { rank: 5, isDown: true },
            ],
        },
    ],
    remainingCards: [
        [
            { rank: 8, isDown: true },
            { rank: 9, isDown: true },
            { rank: 12, isDown: true },
        ],
    ],
    updatedColumns: [
        {
            id: 1,
            cards: [
                { rank: 1, isDown: true },
                { rank: 3, isDown: true },
                { rank: 8, isDown: false },
            ],
        },
        {
            id: 2,
            cards: [
                { rank: 4, isDown: true },
                { rank: 4, isDown: true },
                { rank: 9, isDown: false },
            ],
        },
        {
            id: 3,
            cards: [
                { rank: 4, isDown: true },
                { rank: 5, isDown: true },
                { rank: 12, isDown: false },
            ],
        },
    ],
};
