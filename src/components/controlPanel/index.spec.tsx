import { render } from 'test';

import { ControlPanel } from './index';

describe('ControlPanel', () => {
    it('renders without crashing', () => {
        const component = render(<ControlPanel />);

        expect(component).toBeTruthy();
    });

    it('renders back button successfully', () => {
        const { getByText } = render(<ControlPanel />);

        getByText('Back Home');
    });

    it('renders score text successfully', () => {
        const { getByText } = render(<ControlPanel />);

        getByText('Score');
    });

    it('renders 3 icons successfully', () => {
        const { container } = render(<ControlPanel />);

        const icons = container.querySelectorAll('img');

        expect(icons).toHaveLength(3);
    });

    it('renders Timer successfully', () => {
        const { getByText } = render(<ControlPanel />);

        const timerComponent = getByText('00:00:00');

        expect(timerComponent).toBeTruthy();
    });
});
