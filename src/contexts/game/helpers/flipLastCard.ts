import { IColumn } from 'interfaces';

/**
 * Flips last remaining card from source column.
 * @param targetColumn Target column
 * @param columns Copy of all columns
 */
export const flipLastCard = (id: number, columns: IColumn[]) => {
    const targetColumnIndex = columns.findIndex((column) => column.id === id);

    const targetColumn = columns[targetColumnIndex];

    const updatedColumnCards = targetColumn.cards.map((card, index) => {
        const isLast = index === targetColumn.cards.length - 1;

        return isLast
            ? {
                  ...card,
                  isDown: false,
              }
            : card;
    });

    const updatedSourceColumn = { id, cards: updatedColumnCards };

    columns[targetColumnIndex] = updatedSourceColumn;
};
