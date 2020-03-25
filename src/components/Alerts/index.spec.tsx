import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import { Alerts, IAlertsProps } from './';
import { CloseModal } from './components/CloseModalButton';

const setup = (props: IAlertsProps) => {
	return render(<Alerts {...props} />);
};

describe('Alerts', () => {
	const onCloseModal = jest.fn();
	const message = 'Test';

	beforeEach(() => {
		jest.useFakeTimers();
	});

	it('should render the component properly an error message', () => {
		const tree = setup({ type: 'error', shown: true, message, onCloseModal });
		expect(tree.toJSON()).toMatchSnapshot();
	});

	it('should render the component properly a warning message', () => {
		const tree = setup({ type: 'warning', shown: true, message, onCloseModal });
		expect(tree.toJSON()).toMatchSnapshot();
	});

	it('should render the component properly an success message', () => {
		const tree = setup({ type: 'success', shown: true, message, onCloseModal });
		expect(tree.toJSON()).toMatchSnapshot();
	});

	it('should render the component properly if showAlert is off', () => {
		const tree = setup({
			type: 'success',
			shown: false,
			message,
			onCloseModal,
		});
		expect(tree.toJSON()).toMatchSnapshot();
	});

	it('should close the modal when the button close modal is fired', () => {
		const tree = setup({ type: 'success', shown: true, message, onCloseModal });
		const instance = tree.getByType(CloseModal);
		fireEvent(instance, 'onCloseModal');
		expect(onCloseModal).toHaveBeenCalled();
	});
});
