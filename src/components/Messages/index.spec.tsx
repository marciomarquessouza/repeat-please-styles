import React from 'react';
import { render } from 'react-native-testing-library';
import { MessageWarning, MessageSuccess } from './';

describe('Messages basic tests', () => {
	it('should render the warning message properly', () => {
		const wrapper = render(<MessageWarning>warning</MessageWarning>);
		expect(wrapper.toJSON()).toMatchSnapshot();
	});

	it('should render the success message properly', () => {
		const wrapper = render(<MessageSuccess>warning</MessageSuccess>);
		expect(wrapper.toJSON()).toMatchSnapshot();
	});
});
