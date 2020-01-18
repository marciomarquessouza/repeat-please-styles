import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ButtonPrimary } from './index';
import { findByDataTest } from '../../../utils/testUtils';
import { IBtutton } from '../interface';

const defaultProps: IBtutton = {
	children: 'Defaul',
};

const setup = (props: IBtutton): ShallowWrapper => {
	return shallow(<ButtonPrimary {...props}>{props.children}</ButtonPrimary>);
};

describe('Button Primary Default Tests', () => {
	it('should render the button components properly', () => {
		const wrapper = setup(defaultProps);
		const buttonPrimary = findByDataTest(wrapper, 'buttonPrimary');
		expect(buttonPrimary).toHaveLength(1);
		expect(buttonPrimary).toMatchSnapshot();
	});

	it('should render the loading properly', () => {
		const wrapper = setup({ ...defaultProps, isLoading: true });
		const loading = findByDataTest(wrapper, 'loading');
		expect(loading).toHaveLength(1);
		expect(loading).toMatchSnapshot();
	});
});
