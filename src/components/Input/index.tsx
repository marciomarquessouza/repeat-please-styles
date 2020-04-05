import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './style';

export const PlaceholderInput = (props: TextInputProps) => (
	<TextInput {...{ style: styles.inputStyle, ...props }} />
);
