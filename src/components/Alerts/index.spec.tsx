import React from 'react';
import { render } from 'react-native-testing-library';
import { Alerts, IAlertsProps } from './';

const setup = (props: IAlertsProps) => {
	return render(<Alerts {...props}>{props.children}</Alerts>)
};

describe('Alerts', () => {
	it('should render the component properly', () => {
		const tree = setup({ type: 'error', showAlert: true, children: 'Test' });
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
