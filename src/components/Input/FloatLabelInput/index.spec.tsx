import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByDataTest } from '../../../utils/testUtils';
import { FloatLabelInput } from './';

const setup = (props = {}): ShallowWrapper => {
	return shallow(<FloatLabelInput {...props} />);
};

describe('Float Label Input Basic Tests', () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = setup();
	});

	it('should render the component properly', () => {
		const floatLabelInput = findByDataTest(wrapper, 'floatLabelInput');
		expect(floatLabelInput).toHaveLength(1);
	});

	it('should match to snapshot test', () => {
		const floatLabelInput = findByDataTest(wrapper, 'floatLabelInput');
		expect(floatLabelInput).toMatchSnapshot();
	});
});
