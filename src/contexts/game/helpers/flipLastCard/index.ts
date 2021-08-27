import { IColumn } from 'interfaces';

/**
 * Flips last remaining card from source column.
 * @param targetColumn Target column
 * @param columns Copy of all columns
 */
export const flipLastCard = (id: number, columns: IColumn[]) => {
    const columnIndex = columns.findIndex((column) => column.id === id);

    const column = columns[columnIndex];

    const updatedColumnCards = column.cards.map((card, index) => {
        const isLast = index === column.cards.length - 1;

        return isLast
            ? {
                  ...card,
                  isDown: false,
              }
            : card;
    });

    const updatedSourceColumn = { id, cards: updatedColumnCards };

    columns[columnIndex] = updatedSourceColumn;
};
