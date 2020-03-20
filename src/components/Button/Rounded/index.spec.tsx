import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ButtonRounded } from './index';
import { findByDataTest } from '../../../utils/testUtils';
import { IBtuttonProps } from '../types';

const setup = (props: IBtuttonProps): ShallowWrapper => {
	return shallow(<ButtonRounded {...props}>{props.children}</ButtonRounded>);
};

describe('Button Primary Default Tests', () => {
	it('should render the button components properly', () => {
		const wrapper = setup({ children: 'Primary' });
		const buttonRounded = findByDataTest(wrapper, 'buttonRounded');
		expect(buttonRounded).toHaveLength(1);
		expect(buttonRounded).toMatchSnapshot();
	});

	it('should render the button components loading', () => {
		const wrapper = setup({ children: 'Primary', isLoading: true });
		const buttonRounded = findByDataTest(wrapper, 'buttonRounded');
		expect(buttonRounded).toHaveLength(1);
		expect(buttonRounded).toMatchSnapshot();
	});
});
