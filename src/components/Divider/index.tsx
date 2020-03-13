import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { font } from '../../theme';

export interface IDividerProps {
	text: string;
}

export const Divider = ({ text }: IDividerProps): JSX.Element => {
	return (
		<View style={styles.container} data-test="Divider">
			<View style={styles.dividerStyle} />
			<Text style={styles.textStyle}>{text}</Text>
			<View style={styles.dividerStyle} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	dividerStyle: {
		flex: 1,
		borderWidth: 1,
		marginHorizontal: 10,
	},
	textStyle: {
		fontFamily: font.primary,
		fontSize: 14,
	},
});
