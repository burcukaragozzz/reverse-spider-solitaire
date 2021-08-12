import { IRank } from './IRank';

export interface ICard {
    id: string;
    rank: IRank;
    isSelected: boolean;
    isDown: boolean;
    isHighlighted: boolean;
    suit: string;
}
