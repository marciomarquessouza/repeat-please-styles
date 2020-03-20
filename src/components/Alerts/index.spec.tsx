import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import { Alerts, IAlertsProps } from './';
import { CloseModal } from './components/CloseModalButton';

const setup = (props: IAlertsProps) => {
	return render(<Alerts {...props}>{props.children}</Alerts>);
};

describe('Alerts', () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	it('should render the component properly an error message', () => {
		const tree = setup({ type: 'error', showAlert: true, children: 'Test' });
		expect(tree.toJSON()).toMatchSnapshot();
	});

	it('should render the component properly a warning message', () => {
		const tree = setup({ type: 'warning', showAlert: true, children: 'Test' });
		expect(tree.toJSON()).toMatchSnapshot();
	});

	it('should render the component properly an success message', () => {
		const tree = setup({ type: 'success', showAlert: true, children: 'Test' });
		expect(tree.toJSON()).toMatchSnapshot();
	});

	it('should render the component properly if showAlert is off', () => {
		const tree = setup({ type: 'success', showAlert: false, children: 'Wow' });
		expect(tree.toJSON()).toMatchSnapshot();
	});

	it('should close the modal when the button close modal is fired', () => {
		const tree = setup({ type: 'success', showAlert: true, children: 'Test' });
		const instance = tree.getByType(CloseModal);
		fireEvent(instance, 'onCloseModal');
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
