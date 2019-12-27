import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { IBtutton } from '../interface';
import { styles } from './style';

export class ButtonTransparent extends Component<IBtutton, {}> {
	render() {
		const { children, customStyle, onPress, textStyle }: IBtutton = this.props;
		return (
			<TouchableOpacity
				onPress={onPress}
				style={[styles.ButtonStyle, customStyle]}
				data-test="buttonTransparent">
				<Text style={[styles.TextStyle, textStyle]}>{children}</Text>
			</TouchableOpacity>
		);
	}
}
