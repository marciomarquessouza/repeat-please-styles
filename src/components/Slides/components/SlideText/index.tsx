import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { font } from '../../../../theme';

interface ISlideTextProps {
	title: string;
	text: string;
}

export const SlideText = ({ title, text }: ISlideTextProps): JSX.Element => (
	<View style={styles.textContainer}>
		<Text style={styles.titleStyle}>{title}</Text>
		<Text style={styles.textStyle}>{text}</Text>
	</View>
);

const styles = StyleSheet.create({
	textContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'stretch',
	},
	titleStyle: {
		fontFamily: font.title,
		fontSize: 20,
		textAlign: 'center',
		paddingBottom: 10,
	},
	textStyle: {
		fontSize: 18,
		fontWeight: '100',
		flexWrap: 'wrap',
		textAlign: 'center',
		paddingHorizontal: 8,
	},
});
