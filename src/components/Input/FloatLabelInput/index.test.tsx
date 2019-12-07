import React from 'react';
import { shallow } from 'enzyme';
import { Item } from 'native-base';
import { FloatLabelInput } from './';

const setup = (props={}) => {
	return shallow(<FloatLabelInput { ...props }/>)
}

describe('Float Label Input', () => {
	it('should render the component properly', () => {
		const wrapper = setup();
		expect(wrapper.find(Item)).toHaveLength(1);
	});
});
