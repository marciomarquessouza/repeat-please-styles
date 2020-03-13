import React from 'react';
import { TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { FacebookLogo } from './SVG/FacebookLogo';
import { Text } from 'native-base';
import { styles } from './style';

export interface IFacebookButtonProps {
	children: string;
	style?: ViewStyle;
	textStyle?: TextStyle;
	onPress: () => void;
}

export const FacebookButton = ({
	children,
	style,
	textStyle,
	onPress,
}: IFacebookButtonProps): JSX.Element => (
	<View style={[style, styles.container]} data-test="facebookButton">
		<TouchableOpacity {...{ onPress, style: styles.buttonStyle }}>
			<FacebookLogo style={styles.logoStyle} />
			<Text style={[textStyle, styles.textStyle]}>{children}</Text>
		</TouchableOpacity>
	</View>
);
