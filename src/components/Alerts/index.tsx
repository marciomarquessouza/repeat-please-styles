import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MonkeyHead, Mood } from '../MonkeyHead';

export interface IAlertsProps {
	children: string;
	type: 'warning' | 'error' | 'success';
}

const width = 45;
const height = 45;

const styles = StyleSheet.create({
	container: {
		width,
		height,
		borderWidth: 2,
		borderColor: 'red',
	},
});

export const Alerts = ({ children }: IAlertsProps): JSX.Element => (
	<View>
		<Text>{children}</Text>
		<MonkeyHead
			{...{
				width,
				height,
				style: styles.container,
				mood: Mood.sad,
			}}
		/>
	</View>
);
