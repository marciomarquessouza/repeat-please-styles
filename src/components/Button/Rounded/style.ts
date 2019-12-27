import { StyleSheet } from 'react-native';
import { color, font } from '../../../theme';

export const styles = StyleSheet.create({
	ButtonStyle: {
		width: '100%',
		alignItems: 'center',
		backgroundColor: color.primary,
		padding: 10,
		borderRadius: 25,
	},
	TextStyle: {
		fontFamily: font.primaryLight,
		fontSize: 22,
		color: color.white,
	},
});
