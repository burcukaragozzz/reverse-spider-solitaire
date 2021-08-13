import { ISource, IColumn, ICard } from 'interfaces';

/**
 * Removes given card from the source column.
 * @param source Object that contains source card and column
 * @param columns Copy of all columns
 * @returns Updated column
 */
export const removeCardFromColumn = (source: ISource, columns: IColumn[]) => {
    const movingCards = source.cards;

    //seçtiğim kartı dışarda bırakarak silmiş oluyorum
    // movingCards'ta bulunamayanlari filtrele.
    const findInMovingCards = (card: ICard) =>
        movingCards.find((movingCard) => movingCard.id === card.id);

    const updatedSourceCards = source.column.cards.filter((card) => !findInMovingCards(card));

    //indexe göre column bul
    const sourceColumnIndex = columns.findIndex((column) => column.id === source.column.id);

    // yeni column oluştur
    const updatedSourceColumn = { ...source.column, cards: updatedSourceCards };

    // koleksiyonda aynı adrese yerleştir
    columns[sourceColumnIndex] = updatedSourceColumn;

    return updatedSourceColumn;
};
