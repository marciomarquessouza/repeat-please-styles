import React from 'react';
import { styles } from './style';
import { Text, TextStyle } from 'react-native';

interface IText {
	children: string;
	customStyle: TextStyle;
};

export const Typography = ({ children, customStyle }: IText): JSX.Element => (
	<Text style={[styles.textStyle, customStyle´]}>
		{ children }
	</Text>´
);

Typography.defaultProps = {
	fontSize: 40,
}