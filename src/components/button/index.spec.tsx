import { fireEvent, render } from 'test';

import { Button } from './index';

describe('Button', () => {
    it('renders without crashing', () => {
        const component = render(<Button />);

        expect(component).toBeTruthy();
    });

    it('button is clickable', () => {
        const mockFn = jest.fn();
        const { getByTestId } = render(<Button onClick={mockFn} />);

        const btn = getByTestId('btn');
        fireEvent.click(btn);

        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
