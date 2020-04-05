import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { FacebookLogo } from './SVG/FacebookLogo';
import { styles } from './style';
import { IBtuttonProps } from '../types';

export const FacebookButton = ({
	children,
	style,
	textStyle,
	onPress,
	isLoading,
}: IBtuttonProps): JSX.Element => (
	<View style={[style, styles.container]} data-test="facebookButton">
		<TouchableOpacity
			{...{ onPress, style: styles.buttonStyle, disabled: isLoading }}>
			<FacebookLogo style={styles.logoStyle} />
			{isLoading ? (
				<ActivityIndicator size="large" color="#fff" />
			) : (
				<Text style={[styles.textStyle, textStyle]}>{children}</Text>
			)}
		</TouchableOpacity>
	</View>
);
