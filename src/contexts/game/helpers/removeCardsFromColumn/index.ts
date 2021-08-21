import { IColumn, ICard } from 'interfaces';

/**
 * Removes given cards from the given column.
 * @param column Column object
 * @param cards Cards to remove
 * @param allColumns Copy of all columns
 * @returns Updated column
 */

export const removeCardsFromColumn = (column: IColumn, cards: ICard[], allColumns: IColumn[]) => {
    const updatedCards = column.cards.filter((card) => !cards.find(({ id }) => id === card.id));

    //indexe göre column bul
    const columnIndex = allColumns.findIndex(({ id }) => id === column.id);

    // yeni column oluştur
    const updatedSourceColumn = { ...column, cards: updatedCards };

    // koleksiyonda aynı adrese yerleştir
    allColumns[columnIndex] = updatedSourceColumn;

    return updatedSourceColumn;
};
