import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByDataTest } from '../../../utils/testUtils';
import { FloatLabelInputIcon } from './';

const setup = (props = {}): ShallowWrapper => {
	return shallow(<FloatLabelInputIcon {...props} />);
};

describe('Float Label Input with Icon', () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = setup();
	});

	it('should render the component properly', () => {
		const floatInputComponent = findByDataTest(wrapper, 'floatInputComponent');
		expect(floatInputComponent).toHaveLength(1);
	});

	it('should match the snapshot', () => {
		const floatInputComponent = findByDataTest(wrapper, 'floatInputComponent');
		expect(floatInputComponent).toMatchSnapshot();
	});
});
