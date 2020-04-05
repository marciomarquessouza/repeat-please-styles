import React from 'react';
import { TextInputProps } from 'react-native';
import { render } from 'react-native-testing-library';
import { PlaceholderInput } from './';

const setup = (props: TextInputProps) => {
	return render(<PlaceholderInput {...props} />);
};

describe('Placeholder Input', () => {
	it('must render the component properly', () => {
		const tree = setup({});
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
