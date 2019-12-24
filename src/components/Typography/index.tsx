import React from 'react';
import { Text } from 'react-native';
import { styles } from './style';
import { IText } from './interface';

export const Title = ({
	children,
	customStyle,
	fontSize,
}: IText): JSX.Element => (
	<Text
		style={[styles.titleStyle, customStyle, { fontSize }]}
		data-test="title">
		{children}
	</Text>
);

export const Body = ({
	children,
	customStyle,
	fontSize,
}: IText): JSX.Element => (
	<Text style={[styles.bodyStyle, customStyle, { fontSize }]} data-test="body">
		{children}
	</Text>
);

Title.defaultProps = {
	fontSize: 24,
};

Body.defaultProps = {
	fontSize: 22,
};
