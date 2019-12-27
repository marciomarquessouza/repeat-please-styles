import React, { Component } from 'react';
import { IBtutton } from '../interface';
import { styles } from './style';
import { TouchableOpacity, Text } from 'react-native';

export class ButtonRounded extends Component<IBtutton, {}> {
	render() {
		const { children, customStyle, textStyle, onPress }: IBtutton = this.props;
		return (
			<TouchableOpacity
				onPress={onPress}
				style={[styles.ButtonStyle, customStyle]}
				data-test="buttonRounded">
				<Text style={[styles.TextStyle, textStyle]}>{children}</Text>
			</TouchableOpacity>
		);
	}
}
