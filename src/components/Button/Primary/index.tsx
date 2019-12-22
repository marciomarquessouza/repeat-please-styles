import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Spinner, Text } from 'native-base';
import { IBtutton } from '../interface';
import { style } from './style';

export class ButtonPrimary extends Component<IBtutton, {}> {
	public static defaultProps = {
		children: 'Default',
	};

	render() {
		const {
			children,
			customStyle,
			isLoading,
			onPress,
			rounded,
			textStyle,
		}: IBtutton = this.props;
		return (
			<Button
				rounded={rounded}
				style={[style.ButtonStyle, customStyle]}
				onPress={onPress}
				data-test="buttonPrimary">
				<View style={style.TextContnainer}>
					{isLoading && (
						<Spinner
							color="white"
							style={style.SpinnerStyle}
							data-test="spinner"
						/>
					)}
					<Text uppercase={false} style={[style.TextStyle, textStyle]}>
						{children}
					</Text>
				</View>
			</Button>
		);
	}
}
