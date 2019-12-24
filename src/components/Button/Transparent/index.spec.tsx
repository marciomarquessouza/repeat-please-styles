import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ButtonTransparent } from './index';
import { findByDataTest } from '../../../utils/testUtils';
import { IBtutton } from '../interface';

const defaultProps = {
	children: 'default',
};

const setup = (props: IBtutton): ShallowWrapper => {
	return shallow(
		<ButtonTransparent {...props}>{props.children}</ButtonTransparent>,
	);
};

describe('Transparent Button Tests', () => {
	it('should render the transparent button properlu', () => {
		const wrapper = setup(defaultProps);
		const buttonTransparent = findByDataTest(wrapper, 'buttonTransparente');
		expect(buttonTransparent).toHaveLength(1);
	});
});
