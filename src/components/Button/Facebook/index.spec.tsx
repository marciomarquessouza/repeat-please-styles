import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FacebookButton, IFacebookButtonProps } from './';
import { findByDataTest } from '../../../utils/testUtils';

const defaultProps: IFacebookButtonProps = {
	children: 'Facebook Button',
	onPress: () => null,
};

const setup = (props: IFacebookButtonProps): ShallowWrapper => {
	return shallow(<FacebookButton {...props}>{props.children}</FacebookButton>);
};

describe('Facebook Button Default Tests', () => {
	it('should render the Facebook Button component properly', () => {
		const wrapper = setup(defaultProps);
		const facebookBtnComponent = findByDataTest(wrapper, 'facebookButton');
		expect(facebookBtnComponent).toHaveLength(1);
		expect(facebookBtnComponent).toMatchSnapshot();
	});
});
