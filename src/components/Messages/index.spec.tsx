import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { MessageWarning, IMessageProps } from './';
import { findByDataTest } from '../../utils/testUtils';

const defaultProps: IMessageProps = {
	children: 'Message',
};

const setup = (props: IMessageProps): ShallowWrapper => {
	return shallow(<MessageWarning {...props} />);
};

describe('Messages basic tests', () => {
	it('should render the warning message properly', () => {
		const wrapper = setup(defaultProps);
		const messageWarning = findByDataTest(wrapper, 'warning-message');
		expect(messageWarning).toHaveLength(1);
		expect(messageWarning).toMatchSnapshot();
	});
});
