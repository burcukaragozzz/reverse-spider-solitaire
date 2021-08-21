import { fireEvent, render } from 'test';

import { CardHolder } from './index';

describe('CardHolder', () => {
    it('renders without crashing', () => {
        const component = render(<CardHolder />);

        expect(component).toBeTruthy();
    });

    it('should render with background-image if imageUrl prop', () => {
        const { getByTestId } = render(<CardHolder imageUrl="/images/card_back.png" />);

        const cardHolder = getByTestId('container');

        expect(cardHolder).toHaveStyle(`background-image: url('/images/card_back.png')`);
    });

    it('CardHolder is clickable', () => {
        const mockFn = jest.fn();

        const { getByTestId } = render(<CardHolder onClick={mockFn} />);

        const cardHolder = getByTestId('container');
        fireEvent.click(cardHolder);

        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
