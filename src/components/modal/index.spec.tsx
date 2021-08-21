import { fireEvent, getByTestId, render } from 'test';

import { Modal } from './index';

describe('Modal', () => {
    it('renders without crashing', () => {
        const component = render(<Modal onConfirm={() => null} />);

        expect(component).toBeTruthy();
    });

    it('renders with children', () => {
        const { getByText } = render(
            <Modal onConfirm={() => null}>Modal have child prop...</Modal>,
        );

        getByText('Modal have child prop...');
    });

    it('renders with title prop successfully', () => {
        const { getByText } = render(<Modal title="Warning" onConfirm={() => null} />);

        getByText('Warning');
    });

    it('press the ok button the confirmation function is called', () => {
        const mockOnConfirm = jest.fn();

        const { getByText } = render(<Modal title="Warning" onConfirm={mockOnConfirm} />);

        const confirmBtn = getByText('OK');

        fireEvent.click(confirmBtn);

        expect(mockOnConfirm).toHaveBeenCalledTimes(1);
    });

    it('press the cancel button the reject function is called', () => {
        const mockOnConfirm = jest.fn();
        const mockOnReject = jest.fn();

        const { getByText } = render(
            <Modal
                title="Warning"
                rejectLabel="Cancel"
                onReject={mockOnReject}
                onConfirm={mockOnConfirm}
            />,
        );

        const rejectBtn = getByText('Cancel');

        fireEvent.click(rejectBtn);

        expect(mockOnReject).toHaveBeenCalledTimes(1);
    });
});
