import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ButtonTransparent } from './index';
import { findByDataTest } from '../../../utils/testUtils';
import { IBtuttonProps } from '../types';

const setup = (props: IBtuttonProps): ShallowWrapper => {
	return shallow(
		<ButtonTransparent {...props}>{props.children}</ButtonTransparent>,
	);
};

describe('Button Transparent Default Tests', () => {
	it('should render the button components properly', () => {
		const wrapper = setup({ children: 'Transparent' });
		const buttonTransparent = findByDataTest(wrapper, 'buttonTransparent');
		expect(buttonTransparent).toHaveLength(1);
		expect(buttonTransparent).toMatchSnapshot();
	});
});
