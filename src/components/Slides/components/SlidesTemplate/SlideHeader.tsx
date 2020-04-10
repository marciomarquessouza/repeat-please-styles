import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { font } from '../../../../theme';

interface ISlideHeaderProps {
	title: string;
}

export const SlideHeader = ({ title }: ISlideHeaderProps): JSX.Element => (
	<View style={styles.container}>
		<Text style={styles.titleStyle}>{title}</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleStyle: {
		fontFamily: font.title,
		fontSize: 20,
		textAlign: 'center',
		paddingBottom: 10,
	},
});
