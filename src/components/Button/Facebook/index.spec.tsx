import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FacebookButton, IFacebookButtonProps } from './index';
import { findByDataTest } from '../../../utils/testUtils';

const defaultProps: IFacebookButtonProps = {
	children: 'Link Button',
	onPress: () => null,
};

const setup = (props: IFacebookButtonProps): ShallowWrapper => {
	return shallow(<FacebookButton {...props}>{props.children}</FacebookButton>);
};

describe('Facebook Button Default Tests', () => {
	it('should render the FacebookButon component properly', () => {
		const wrapper = setup(defaultProps);
		const FacebookBtnComponent = findByDataTest(wrapper, 'facebookButton');
		expect(FacebookBtnComponent).toHaveLength(1);
		expect(FacebookBtnComponent).toMatchSnapshot();
	});
});
