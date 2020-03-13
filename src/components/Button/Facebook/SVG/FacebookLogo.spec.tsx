import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FacebookLogo, IFacebookLogoProps } from './FacebookLogo';
import { findByDataTest } from '../../../../utils/testUtils';

const setup = (props: IFacebookLogoProps): ShallowWrapper => {
	return shallow(<FacebookLogo {...props} />);
};

describe('Facebook Logo Basic Test', () => {
	it('should render Facebook Logo Component properly', () => {
		const wrapper = setup({});
		const facebookLogo = findByDataTest(wrapper, 'FacebookLogo');
		expect(facebookLogo).toHaveLength(1);
		expect(facebookLogo).toMatchSnapshot();
	});
});
