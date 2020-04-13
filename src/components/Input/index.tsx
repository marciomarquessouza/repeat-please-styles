import React from 'react';
import {
	TextInput,
	TextInputProps,
	TextStyle,
	View,
	ViewStyle,
} from 'react-native';
import { styles } from './style';

interface IPlaceHolderInput extends TextInputProps {
	viewStyle?: ViewStyle;
	textstyle?: TextStyle;
}

export const PlaceholderInput = (props: IPlaceHolderInput) => (
	<View style={[styles.container, props.style]}>
		<TextInput
			{...{
				style: [styles.inputStyle, props.textstyle],
				placeholderTextColor: '#000',
				...props,
			}}
		/>
	</View>
);
