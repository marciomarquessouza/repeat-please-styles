import React from 'react';
import { TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { GoogleLogo } from './SVG/GoogleLogo';
import { Text } from 'native-base';
import { styles } from './style';

export interface IGoogleButtonProps {
	children: string;
	style?: ViewStyle;
	textStyle?: TextStyle;
	onPress: () => void;
}

export const GoogleButton = ({
	children,
	style,
	textStyle,
	onPress,
}: IGoogleButtonProps): JSX.Element => (
	<View style={[style, styles.container]} data-test="googleButton">
		<TouchableOpacity {...{ onPress, style: styles.buttonStyle }}>
			<GoogleLogo style={styles.logoStyle} />
			<Text style={[textStyle, styles.textStyle]}>{children}</Text>
		</TouchableOpacity>
	</View>
);
