import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { IBtutton } from '../interface';
import { style } from './style';

export class ButtonTransparent extends Component<IBtutton, {}> {
	public static defaultProps = {
		children: 'Default',
	};

	render() {
		const { children, customStyle, onPress, textStyle }: IBtutton = this.props;
		return (
			<TouchableOpacity
				style={[style.ButtonStyle, customStyle]}
				onPress={onPress}
				data-test="buttonTransparente">
				<Text style={[style.TextStyle, textStyle]}>{children}</Text>
			</TouchableOpacity>
		);
	}
}
