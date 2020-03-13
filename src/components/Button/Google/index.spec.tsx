import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { GoogleButton, IGoogleButtonProps } from './';
import { findByDataTest } from '../../../utils/testUtils';

const defaultProps: IGoogleButtonProps = {
	children: 'Google Button',
	onPress: () => null,
};

const setup = (props: IGoogleButtonProps): ShallowWrapper => {
	return shallow(<GoogleButton {...props}>{props.children}</GoogleButton>);
};

describe('Google Button Default Tests', () => {
	it('should render the Google Button component properly', () => {
		const wrapper = setup(defaultProps);
		const googleBtnComponent = findByDataTest(wrapper, 'googleButton');
		expect(googleBtnComponent).toHaveLength(1);
		expect(googleBtnComponent).toMatchSnapshot();
	});
});
