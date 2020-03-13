import React from 'react';
import {
	Dimensions,
	StyleSheet,
	Text,
	TextStyle,
	View,
	ViewStyle,
} from 'react-native';
import { font } from '../../theme';

export interface IDividerProps {
	borderStyle?: ViewStyle;
	containerStyle?: ViewStyle;
	text: string;
	textStyle?: TextStyle;
}

const WIDTH = Dimensions.get('window').width;

export const Divider = ({
	borderStyle,
	containerStyle,
	text,
	textStyle,
}: IDividerProps): JSX.Element => {
	return (
		<View style={[styles.container, containerStyle]} data-test="Divider">
			<View style={[styles.dividerStyle, borderStyle]} />
			<Text style={[styles.textStyle, textStyle]}>{text}</Text>
			<View style={[styles.dividerStyle, borderStyle]} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: WIDTH,
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
