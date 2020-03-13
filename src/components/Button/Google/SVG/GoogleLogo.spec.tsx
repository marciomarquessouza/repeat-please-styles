import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { GoogleLogo, IGoogleLogoProps } from './GoogleLogo';
import { findByDataTest } from '../../../../utils/testUtils';

const setup = (props: IGoogleLogoProps): ShallowWrapper => {
	return shallow(<GoogleLogo {...props} />);
};

describe('Google Logo Default Tests', () => {
	it('should render the Google Logo component properly', () => {
		const wrapper = setup({ style: { backgroundColor: 'red' } });
		const googleLogo = findByDataTest(wrapper, 'googleLogo');
		expect(googleLogo).toHaveLength(1);
		expect(googleLogo).toMatchSnapshot();
	});
});
