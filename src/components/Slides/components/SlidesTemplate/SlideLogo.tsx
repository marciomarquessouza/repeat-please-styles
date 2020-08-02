import React from 'react';
import { View, Text } from 'react-native';
import { TitleLogo } from '../../../Logo';
import { styles } from './styles';

interface ISlideLogoProps {
	greeting?: string;
}

export const SlideLogo = ({ greeting = 'Welcome to' }: ISlideLogoProps) => (
	<View style={styles.container}>
		<Text style={styles.titleStyle}>{greeting}</Text>
		<TitleLogo />
	</View>
);
