import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MonkeyHead, Mood } from '../../../MonkeyHead';
import { color } from '../../../../theme';

export interface IMonkeyHeadModal {
	mood: Mood;
}

export const MonkeyHeadModal = ({ mood }: IMonkeyHeadModal): JSX.Element => (
	<View style={styles.circleStyle} data-test="monkeyHead">
		<MonkeyHead
			{...{ mood, width: 33, height: 35, style: styles.monkeyHeadStyle }}
		/>
	</View>
);

const styles = StyleSheet.create({
	circleStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 2,
		borderColor: color.grayPrimary,
		width: 45,
		height: 45,
		borderRadius: 22.5,
		backgroundColor: color.background,
	},
	monkeyHeadStyle: {
		width: 33,
		height: 35,
	},
});
