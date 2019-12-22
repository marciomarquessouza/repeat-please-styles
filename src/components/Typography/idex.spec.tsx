import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Title, Body } from './index';
import { findByDataTest } from '../../utils/testUtils';
import { IText } from './interface';

const defaultProps = {
	children: 'default',
};

const setupTitle = (props: IText): ShallowWrapper => {
	return shallow(<Title {...props}>{props.children}</Title>);
};

const setupBody = (props: IText): ShallowWrapper => {
	return shallow(<Body {...props}>{props.children}</Body>);
};

describe('Typography Title Tests', () => {
	it('should render the text title properly', () => {
		const wrapper = setupTitle(defaultProps);
		const title = findByDataTest(wrapper, 'title');
		expect(title).toHaveLength(1);
	});
});

describe('Typograpy Body Tests', () => {
	it('should render the text body properly', () => {
		const wrapper = setupBody(defaultProps);
		const body = findByDataTest(wrapper, 'body');
		expect(body).toHaveLength(1);
	});
});
