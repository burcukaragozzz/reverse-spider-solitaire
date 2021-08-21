import { fireEvent, render } from 'test';

import { SuitCard } from './index';

describe('SuitCard', () => {
    it('renders without crashing', () => {
        const component = render(<SuitCard suit="diamond" onClick={() => undefined} />);

        expect(component).toBeTruthy();
    });

    it('should render image with suit', () => {
        const { container } = render(<SuitCard suit="diamond" onClick={() => undefined} />);

        const image = container.querySelector('img');

        expect(image).toHaveAttribute('src', '/images/diamond/diamond_1.png');
    });

    it('suit card is clickable', () => {
        const mockFn = jest.fn();

        const { getByTestId } = render(<SuitCard suit="diamond" onClick={mockFn} />);

        const card = getByTestId('suit-card');

        fireEvent.click(card);

        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
