import { fireEvent, render } from 'test';

import { ControlPanel } from './index';

describe('ControlPanel', () => {
    it('renders without crashing', () => {
        const component = render(<ControlPanel />);

        expect(component).toBeTruthy();
    });

    it('renders 3 icons successfully', () => {
        const { container } = render(<ControlPanel />);

        const icons = container.querySelectorAll('img');

        expect(icons).toHaveLength(3);
    });

    it('renders back button successfully', () => {
        const { getByText } = render(<ControlPanel />);

        getByText('Back Home');
    });

    xit('modal', () => {
        const mockFn = jest.fn();

        const { getByText } = render(<ControlPanel />);

        const backBtn = getByText('Back Home');

        fireEvent.click(backBtn);

        expect(mockFn).toHaveBeenCalledTimes(1);

        getByText('If you come back the game will be over. Are you sure want to come back?');
    });

    it('renders score text successfully', () => {
        const { getByText } = render(<ControlPanel />);

        getByText('Score :');
    });

    it('renders Timer successfully', () => {
        const { getByText } = render(<ControlPanel />);

        const timerComponent = getByText('00:00:00');

        expect(timerComponent).toBeTruthy();
    });
});
