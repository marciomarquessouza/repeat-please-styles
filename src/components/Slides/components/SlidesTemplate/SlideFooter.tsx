import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ISlideHeaderProps {
	text: string;
}

export const SlideFooter = ({ text }: ISlideHeaderProps): JSX.Element => (
	<View style={styles.container}>
		<Text style={styles.titleStyle}>{text}</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleStyle: {
		fontSize: 18,
		fontWeight: '100',
		flexWrap: 'wrap',
		textAlign: 'center',
		paddingHorizontal: 8,
	},
});
