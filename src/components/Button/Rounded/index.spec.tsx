import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ButtonRounded } from './index';
import { findByDataTest } from '../../../utils/testUtils';
import { IBtutton } from '../interface';

const defaultProps: IBtutton = {
	children: 'Defaul',
};

const setup = (props: IBtutton): ShallowWrapper => {
	return shallow(<ButtonRounded {...props}>{props.children}</ButtonRounded>);
};

describe('Button Primary Default Tests', () => {
	it('should render the button components properly', () => {
		const wrapper = setup(defaultProps);
		const buttonRounded = findByDataTest(wrapper, 'buttonRounded');
		expect(buttonRounded).toHaveLength(1);
		expect(buttonRounded).toMatchSnapshot();
	});
});
