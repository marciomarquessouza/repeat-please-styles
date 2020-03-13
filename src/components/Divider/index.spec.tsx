import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Divider, IDividerProps } from './';
import { findByDataTest } from '../../utils/testUtils';

const setup = (props: IDividerProps): ShallowWrapper => {
	return shallow(<Divider {...props} />);
};

describe('Divider Basic Test', () => {
	it('should render Divider Component properly', () => {
		const wrapper = setup({ text: 'OR' });
		const dividerComponent = findByDataTest(wrapper, 'Divider');
		expect(dividerComponent).toHaveLength(1);
		expect(dividerComponent).toMatchSnapshot();
	});
});
