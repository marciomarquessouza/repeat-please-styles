import React, { Component } from 'react';
import { IBtutton } from '../interface';
import { styles } from './style';
import { ActivityIndicator, TouchableOpacity, Text } from 'react-native';

export class ButtonRounded extends Component<IBtutton, {}> {
	render() {
		const {
			children,
			customStyle,
			textStyle,
			onPress,
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
				data-test="buttonRounded">
				{content}
			</TouchableOpacity>
		);
	}
}
