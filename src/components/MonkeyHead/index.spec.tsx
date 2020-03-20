import React from 'react';
import { render } from 'react-native-testing-library';
import { MonkeyHead, IMonkeyHeadProps, Mood } from './';

const setup = (props: IMonkeyHeadProps) => {
	return render(<MonkeyHead {...props} />);
};

describe('Monkey Head', () => {
	it('should render the button components properly', () => {
		const wrapper = setup({ mood: Mood.curious });
		expect(wrapper.toJSON()).toMatchSnapshot();
	});
});
