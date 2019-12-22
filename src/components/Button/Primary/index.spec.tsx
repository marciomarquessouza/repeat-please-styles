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
});

describe('Button Primary - Loading', () => {
	it('should render the button while it been loading', () => {
		const wrapper = setup({ ...defaultProps, isLoading: true });
		const spinner = findByDataTest(wrapper, 'spinner');
		expect(spinner).toHaveLength(1);
		expect(spinner).toMatchSnapshot();
	});
});
