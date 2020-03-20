import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { GoogleButton } from './';
import { findByDataTest } from '../../../utils/testUtils';
import { IBtuttonProps } from '../types';

const defaultProps: IBtuttonProps = {
	children: 'Google Button',
	onPress: () => null,
};

const setup = (props: IBtuttonProps): ShallowWrapper => {
	return shallow(<GoogleButton {...props}>{props.children}</GoogleButton>);
};

describe('Google Button Default Tests', () => {
	it('should render the Google Button component properly', () => {
		const wrapper = setup(defaultProps);
		const googleBtnComponent = findByDataTest(wrapper, 'googleButton');
		expect(googleBtnComponent).toHaveLength(1);
		expect(googleBtnComponent).toMatchSnapshot();
	});

	it('should render the Google Button is loading', () => {
		const wrapper = setup({ ...defaultProps, isLoading: true });
		const googleBtnComponent = findByDataTest(wrapper, 'googleButton');
		expect(googleBtnComponent).toHaveLength(1);
		expect(googleBtnComponent).toMatchSnapshot();
	});
});
