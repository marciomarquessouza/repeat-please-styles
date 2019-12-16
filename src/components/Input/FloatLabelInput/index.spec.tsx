import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByDataTest } from '../../../utils/testUtils';
import { FloatLabelInput } from './';

const setup = (props = {}): ShallowWrapper => {
	return shallow(<FloatLabelInput {...props} />);
};

describe('Float Label Input Basic Tests', () => {
	it('should render the component properly', () => {
		const wrapper = setup();
		const floatLabelInput = findByDataTest(wrapper, 'floatLabelInput');
		expect(floatLabelInput).toHaveLength(1);
		expect(floatLabelInput).toMatchSnapshot();
	});
});

describe('Float Input with Icon Tests', () => {
	it('should render the imput with icon', () => {
		const wrapper = setup({ icon: 'mail' })
		const floatIconInput = findByDataTest(wrapper, 'floatIconInout');
		expect(floatIconInput).toHaveLength(1);
		expect(floatIconInput).toMatchSnapshot();
	});
});
