import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByDataTest } from '../../../utils/testUtils';
import { PlaceholderInput } from './';

const setup = (props = {}): ShallowWrapper => {
	return shallow(<PlaceholderInput {...props} />);
};

describe('Placeholder Input - Basic Tests', () => {
	it('should render the component properly', () => {
		const wrapper = setup();
		const placeholderInput = findByDataTest(wrapper, 'placeholderInput');
		expect(placeholderInput).toHaveLength(1);
		expect(placeholderInput).toMatchSnapshot();
	});
});

describe('Placeholder Input - Tests with icon', () => {
	it('should render the placeholder input with icon', () => {
		const wrapper = setup({ icon: 'mail' });
		const placeholderInput = findByDataTest(wrapper, 'placeholderInput');
		expect(placeholderInput).toHaveLength(1);
		expect(placeholderInput).toMatchSnapshot();
	});
});
