import React from 'react';
import { IBtuttonProps } from '../types';
import { styles } from './style';
import { ActivityIndicator, TouchableOpacity, Text } from 'react-native';

export const ButtonRounded = ({
	children,
	style,
	textStyle,
	onPress,
	isLoading,
}: IBtuttonProps): JSX.Element => (
	<TouchableOpacity
		onPress={onPress}
		style={[style, styles.buttonStyle]}
		data-test="buttonRounded">
		{isLoading ? (
			<ActivityIndicator size="large" color="#fff" />
		) : (
			<Text style={[styles.textStyle, textStyle]}>{children}</Text>
		)}
	</TouchableOpacity>
);
