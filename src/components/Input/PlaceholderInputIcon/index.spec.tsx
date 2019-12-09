import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByDataTest } from '../../../utils/testUtils';
import { PlaceholderInputIcon } from './';

const setup = (props = {}): ShallowWrapper => {
	return shallow(<PlaceholderInputIcon {...props} />);
};

describe('Placeholder Input with Icon - Basic Tests', () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = setup();
	});

	it('should render the component properly', () => {
		const placeholderInputIcon = findByDataTest(
			wrapper,
			'placeholderInputIcon',
		);
		expect(placeholderInputIcon).toHaveLength(1);
	});

	it('should match the snapshot', () => {
		const placeholderInputIcon = findByDataTest(
			wrapper,
			'placeholderInputIcon',
		);
		expect(placeholderInputIcon).toMatchSnapshot();
	});
});
