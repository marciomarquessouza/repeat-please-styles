import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { IBtuttonProps } from '../types';
import { styles } from './style';

export const ButtonTransparent = ({
	children,
	isLoading,
	onPress,
	style,
	textStyle,
}: IBtuttonProps): JSX.Element => (
	<TouchableOpacity
		onPress={onPress}
		style={[style, styles.ButtonStyle]}
		data-test="buttonTransparent">
		{isLoading ? (
			<ActivityIndicator size="large" color="#fff" />
		) : (
			<Text style={[styles.TextStyle, textStyle]}>{children}</Text>
		)}
	</TouchableOpacity>
);
