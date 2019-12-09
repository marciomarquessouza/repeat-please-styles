import React from 'react';
import { styles } from './style';
import { Text, TextStyle } from 'react-native';

interface IText {
	children: string;
};

export const Typography = ({ children }: IText): JSX.Element => (
	<Text style={styles.textStyle}>
		{ children }
	</Text>
);

Typography.defaultProps = {
	fontSize: 40,
}