import { render } from 'test';

import { Header } from './index';

describe('Header component testing with testing-library', () => {
    const { getByTestId } = render(<Header />);

    const container = getByTestId('container');

    it('renders without crashing', () => {
        expect(container.parentElement).toBeTruthy();
    });

    it('renders successfuly toggleButton', () => {
        const toggleButton = container.parentElement.lastChild;

        expect(toggleButton).toBeTruthy();
    });

    it('renders successfuly spider-solitaire logo', () => {
        expect(container.firstChild).toBeDefined();
    });

    it('renders successfuly header text', () => {
        const { getByText } = render(<Header />);

        getByText('Spider Solitaire');
    });
});
