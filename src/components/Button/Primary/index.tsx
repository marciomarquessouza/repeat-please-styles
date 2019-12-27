import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { IBtutton } from '../interface';
import { styles } from './style';

export class ButtonPrimary extends Component<IBtutton, {}> {
	render() {
		const { children, customStyle, onPress, textStyle }: IBtutton = this.props;
		return (
			<TouchableOpacity
				onPress={onPress}
				style={[styles.ButtonStyle, customStyle]}
				data-test="buttonPrimary">
				<Text style={[styles.TextStyle, textStyle]}>{children}</Text>
			</TouchableOpacity>
		);
	}
}
