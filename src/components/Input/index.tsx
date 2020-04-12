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
	style?: ViewStyle;
	textstyle?: TextStyle;
}

export const PlaceholderInput = (props: IPlaceHolderInput) => (
	<View style={[styles.container, props.style]}>
		<TextInput {...{ style: [styles.inputStyle, props.textstyle], ...props }} />
	</View>
);
