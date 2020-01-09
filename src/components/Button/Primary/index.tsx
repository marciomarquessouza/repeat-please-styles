import React, { Component } from 'react';
import { ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import { IBtutton } from '../interface';
import { styles } from './style';

export class ButtonPrimary extends Component<IBtutton, {}> {
	render() {
		const {
			children,
			customStyle,
			onPress,
			textStyle,
			isLoading,
		}: IBtutton = this.props;

		const content = isLoading ? (
			<ActivityIndicator size="large" color="#fff" />
		) : (
			<Text style={[styles.TextStyle, textStyle]}>{children}</Text>
		);

		return (
			<TouchableOpacity
				onPress={onPress}
				style={[styles.ButtonStyle, customStyle]}
				data-test="buttonPrimary">
				{content}
			</TouchableOpacity>
		);
	}
}
