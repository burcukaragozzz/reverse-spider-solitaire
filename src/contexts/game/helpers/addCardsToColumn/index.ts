import { ICard, IColumn } from 'interfaces';

/**
 * Adds selected card into the target column.
 * @param targetColumn Target column
 * @param cards Card to move into
 * @param allColumns Copy of all columns
 */
export const addCardsToColumn = (targetColumn: IColumn, cards: ICard[], allColumns: IColumn[]) => {
    const targetColumnIndex = allColumns.findIndex(({ id }) => id === targetColumn.id);

    const updatedTargetColumn = {
        ...targetColumn,
        cards: [...targetColumn.cards, ...cards],
    };

    allColumns[targetColumnIndex] = updatedTargetColumn;

    return updatedTargetColumn;
};
