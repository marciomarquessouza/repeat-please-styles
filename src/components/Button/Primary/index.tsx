import React from 'react';
import { ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import { IBtuttonProps } from '../types';
import { styles } from './style';

export const ButtonPrimary = ({
	children,
	style,
	onPress,
	textStyle,
	isLoading,
}: IBtuttonProps): JSX.Element => (
	<TouchableOpacity
		onPress={onPress}
		style={[style, styles.buttonStyle]}
		data-test="buttonPrimary">
		{isLoading ? (
			<ActivityIndicator size="large" color="#fff" data-test="loading" />
		) : (
			<Text style={[styles.textStyle, textStyle]}>{children}</Text>
		)}
	</TouchableOpacity>
);
