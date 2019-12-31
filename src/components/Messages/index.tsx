import React from 'react';
import {
	Text,
	TextStyle,
	Image,
	ImageStyle,
	View,
	ViewStyle,
} from 'react-native';
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
			<Image
				source={require('../../../assets/images/warning-icon.png')}
				style={[styles.imageStyle, customImageStyle]}
			/>
			<Text style={[styles.textStyle, customTextStyle]}>{children}</Text>
		</View>
	);
};
