import { render } from 'test';

import { Timer } from './index';

describe('Timer', () => {
    it('renders without crashing', () => {
        const component = render(<Timer />);

        expect(component).toBeTruthy();
    });

    it('render timer default text with successfuly', () => {
        const { getByText } = render(<Timer />);

        getByText('00:00:00');
    });

    test('setInterval runs every 1000 milliseconds', () => {
        jest.useFakeTimers();

        render(<Timer />);

        expect(setInterval).toHaveBeenCalledTimes(1);

        expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    });
});
