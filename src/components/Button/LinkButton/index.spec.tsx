import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { LinkButton, ILinkButtonProps } from './index';
import { findByDataTest } from '../../../utils/testUtils';

const defaultProps: ILinkButtonProps = {
	children: 'Link Button',
};

const setup = (props: ILinkButtonProps): ShallowWrapper => {
	return shallow(<LinkButton {...props}>{props.children}</LinkButton>);
};

describe('Link Button Default Tests', () => {
	it('should render the link button component properly', () => {
		const wrapper = setup(defaultProps);
		const linkButton = findByDataTest(wrapper, 'linkButton');
		expect(linkButton).toHaveLength(1);
		expect(linkButton).toMatchSnapshot();
	});
});
