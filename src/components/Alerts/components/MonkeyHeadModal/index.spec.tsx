import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { MonkeyHeadModal, IMonkeyHeadModal } from './';
import { findByDataTest } from '../../../../utils/testUtils'
import { Mood } from '../../../MonkeyHead';

const setup = (props: IMonkeyHeadModal): ShallowWrapper => {
	return shallow(<MonkeyHeadModal {...props} />);
};

describe('Monkey Head Modal', () => {
	it('should render the component properly', () => {
		const wrapper = setup({ mood: Mood.curious });
		const monkeyHead = findByDataTest(wrapper, 'monkeyHead');
		expect(monkeyHead).toHaveLength(1);
		expect(monkeyHead).toMatchSnapshot();
	});
});