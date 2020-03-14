import React from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { GoogleLogo } from './SVG/GoogleLogo';
import { Text } from 'native-base';
import { styles } from './style';
import { IBtuttonProps } from '../types';

export const GoogleButton = ({
	children,
	isLoading,
	onPress,
	style,
	textStyle,
}: IBtuttonProps): JSX.Element => (
	<View style={[style, styles.container]} data-test="googleButton">
		<TouchableOpacity
			{...{ onPress, style: styles.buttonStyle, disabled: isLoading }}>
			<GoogleLogo style={styles.logoStyle} />
			{isLoading ? (
				<ActivityIndicator size="large" />
			) : (
				<Text style={[styles.textStyle, textStyle]}>{children}</Text>
			)}
		</TouchableOpacity>
	</View>
);
