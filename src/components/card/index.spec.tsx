import { fireEvent, render } from 'test';

import { Card } from './index';

describe('Card', () => {
    it('renders without crashing', () => {
        const component = render(
            <Card card={{ id: '3', rank: 2, isDown: false, suit: 'diamonds' }} />,
        );

        expect(component).toBeTruthy();
    });

    it('card component is clickable', () => {
        const mockFn = jest.fn();

        const { getByTestId } = render(
            <Card card={{ id: '3', rank: 2, isDown: false, suit: 'diamonds' }} onClick={mockFn} />,
        );

        const cardBody = getByTestId('card-image').parentElement;

        fireEvent.click(cardBody);

        expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('render card image successfuly', () => {
        const { getByTestId } = render(
            <Card card={{ id: '3', rank: 2, isDown: false, suit: 'diamonds' }} />,
        );

        getByTestId('card-image');
    });

    it('should show box-shadow and border styles if isSelected prop', () => {
        const { getByTestId } = render(
            <Card card={{ id: '3', rank: 2, isDown: false, suit: 'diamonds' }} isSelected={true} />,
        );

        const cardBody = getByTestId('card-image').parentElement;

        expect(cardBody).toHaveStyle('box-shadow: 2px 2px 4px black');

        expect(cardBody).toHaveStyle('border: 2px solid black');
    });

    it('should show default background image for card if isDown prop', () => {
        const { getByTestId } = render(
            <Card card={{ id: '3', rank: 2, isDown: true, suit: 'diamonds' }} />,
        );

        const cardImage = getByTestId('card-image');
        expect(cardImage).toHaveAttribute('src', '/images/card_back.png');
    });
});
