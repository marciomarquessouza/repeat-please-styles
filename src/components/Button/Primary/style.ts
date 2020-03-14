import { StyleSheet } from 'react-native';
import { font, color } from '../../../theme';

export const styles = StyleSheet.create({
	buttonStyle: {
		width: '100%',
		alignItems: 'center',
		backgroundColor: color.primary,
		padding: 10,
		borderRadius: 10,
	},
	textStyle: {
		fontFamily: font.primaryLight,
		fontSize: 22,
		color: color.white,
	},
});
