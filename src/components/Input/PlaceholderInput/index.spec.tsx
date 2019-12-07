import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByDataTest } from '../../../utils/testUtils';
import { PlaceholderInput } from './';

const setup = (props = {}): ShallowWrapper => {
	return shallow(<PlaceholderInput {...props} />);
};

describe('Placeholder Input - Basic Tests', () => {
	let wrapper: ShallowWrapper;
	beforeEach(() => {
		wrapper = setup();
	});

	it('should render the component properly', () => {
		const placeholderInput = findByDataTest(wrapper, 'placeholderInput');
		expect(placeholderInput).toHaveLength(1);
	});

	it('should match the snapshot', () => {
		const placeholderInput = findByDataTest(wrapper, 'placeholderInput');
		expect(placeholderInput).toMatchSnapshot();
	});
});
