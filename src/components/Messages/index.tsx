import React from 'react';
import { Text, TextStyle, ImageStyle, View, ViewStyle } from 'react-native';
import { WarningIcon } from '../../../assets/images/WarningIcon';
import { styles } from './styles';

export interface IMessageProps {
	children: string;
	customStyle?: ViewStyle;
	customTextStyle?: TextStyle;
	customImageStyle?: ImageStyle;
}

export const MessageWarning = ({
	children,
	customStyle,
	customTextStyle,
	customImageStyle,
}: IMessageProps): JSX.Element => {
	return (
		<View
			style={[styles.container, styles.warningStyle, customStyle]}
			data-test="warning-message">
			<WarningIcon style={[styles.imageStyle, customImageStyle]} />
			<Text style={[styles.textStyle, customTextStyle]}>{children}</Text>
		</View>
	);
};
