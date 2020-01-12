import React from 'react';
import { Text, TextStyle } from 'react-native';
import { styles } from './style';

export interface ILinkButtonProps {
	children: string;
	customStyle?: TextStyle;
	onPress?: () => void;
}

export const LinkButton = ({
	children,
	customStyle,
	onPress,
}: ILinkButtonProps): JSX.Element => (
	<Text
		data-test="linkButton"
		style={[styles.linkStyle, customStyle]}
		onPress={onPress}>
		{children}
	</Text>
);
