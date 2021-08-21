import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { fireEvent, render } from 'test';

import { Card } from './index';

describe('Card', () => {
    it('renders without crashing', () => {
        const component = render(
            <DndProvider backend={HTML5Backend}>
                <Card
                    id={'2'}
                    isSelected={false}
                    isDown={false}
                    card={{ id: '3', rank: 2, isSelected: false, isDown: false, suit: 'diamonds' }}
                />
            </DndProvider>,
        );

        expect(component).toBeTruthy();
    });

    it('card component is clickable', () => {
        const mockFn = jest.fn();

        const { getByTestId } = render(
            <DndProvider backend={HTML5Backend}>
                <Card
                    id={'2'}
                    isSelected={false}
                    isDown={false}
                    card={{ id: '3', rank: 2, isSelected: false, isDown: false, suit: 'diamonds' }}
                    onClick={mockFn}
                />
            </DndProvider>,
        );

        const cardBody = getByTestId('card-image').parentElement;

        fireEvent.click(cardBody);

        expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('render card image successfuly', () => {
        const { getByTestId } = render(
            <DndProvider backend={HTML5Backend}>
                <Card
                    id={'2'}
                    isSelected={false}
                    isDown={false}
                    card={{ id: '3', rank: 2, isSelected: false, isDown: false, suit: 'diamonds' }}
                />
                ,
            </DndProvider>,
        );

        getByTestId('card-image');
    });

    it('should show box-shadow and border styles if isSelected prop', () => {
        const { getByTestId } = render(
            <DndProvider backend={HTML5Backend}>
                <Card
                    id={'2'}
                    isSelected={true}
                    isDown={false}
                    card={{ id: '3', rank: 2, isSelected: true, isDown: false, suit: 'diamonds' }}
                />
                , );
            </DndProvider>,
        );

        const cardBody = getByTestId('card-image').parentElement;

        expect(cardBody).toHaveStyle('box-shadow: 2px 2px 4px black');

        expect(cardBody).toHaveStyle('border: 2px solid black');
    });

    it('should show default background image for card if isDown prop', () => {
        const { getByTestId } = render(
            <DndProvider backend={HTML5Backend}>
                <Card
                    id={'2'}
                    isSelected={false}
                    isDown={true}
                    card={{ id: '3', rank: 2, isSelected: false, isDown: true, suit: 'diamonds' }}
                />
            </DndProvider>,
        );

        const cardImage = getByTestId('card-image');
        expect(cardImage).toHaveAttribute('src', '/images/card_back.png');
    });

    xit('should show card image with suit and rank if not isDown prop', () => {
        const { getByTestId } = render(
            <DndProvider backend={HTML5Backend}>
                <Card
                    id={'2'}
                    isSelected={false}
                    isDown={false}
                    card={{ id: '3', rank: 2, isSelected: false, isDown: false, suit: 'diamond' }}
                />
                ,
            </DndProvider>,
        );

        const cardImage = getByTestId('card-image');

        expect(cardImage).toHaveAttribute('src', '/images/diamond/diamond_2.png');
    });
});
