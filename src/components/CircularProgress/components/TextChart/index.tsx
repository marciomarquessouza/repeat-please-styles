import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface ITextChartProps {
	progress: number;
	textChart: string;
}

const progressPercent = (progress: number): string => {
	const roundProgress = Math.round(progress * 100);
	return `${roundProgress}%`;
}

export const TextChart = (props: ITextChartProps): JSX.Element => (
	<View style={styles.container}>
		<Text style={styles.headStyle}>{progressPercent(props.progress)}</Text>
		<Text style={styles.subHeadStyle}>{props.textChart}</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
	},
	headStyle: {
		fontSize: 48,
		fontWeight: 'bold',
		color: '#656565',
	},
	subHeadStyle: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#656565',
	},
});
