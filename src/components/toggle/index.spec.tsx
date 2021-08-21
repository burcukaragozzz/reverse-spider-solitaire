import { fireEvent, render } from 'test';

import { Toggle } from './index';

describe('Toggle', () => {
    it('renders without crashing', () => {
        const component = render(<Toggle />);

        expect(component).toBeTruthy();
    });

    it('button is clickable', () => {
        const mockFn = jest.fn();
        const { getByTestId } = render(<Toggle onClick={mockFn} />);

        const toggleBtn = getByTestId('toggle');
        fireEvent.click(toggleBtn);
    });

    it('renders toggle button contain 2 images', () => {
        const { getByTestId } = render(<Toggle />);

        const icon = getByTestId('toggle').children;

        expect(icon).toHaveLength(2);
    });

    it('renders light icon successfully', () => {
        const { getByTestId } = render(<Toggle />);

        const lightIcon = getByTestId('toggle').firstChild;

        expect(lightIcon).toHaveAttribute('src', '/icons/light-icon.png');
    });

    it('renders dark icon successfully', () => {
        const { getByTestId } = render(<Toggle />);

        const darkIcon = getByTestId('toggle').lastChild;

        expect(darkIcon).toHaveAttribute('src', '/icons/dark-icon.png');
    });
});
