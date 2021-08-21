import { render } from 'test';

import { Logo } from './index';

describe('Logo', () => {
    const { container } = render(<Logo />);

    const image = container.firstChild;

    it('renders image with correctly url', () => {
        expect(image).toHaveAttribute('src', '/images/spider-logo.png');
    });
});
