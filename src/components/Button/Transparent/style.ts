import { StyleSheet } from 'react-native';
import { font, color } from '../../../theme';

export const style = StyleSheet.create({
	ButtonStyle: {
		width: '100%',
		height: 40,
		backgroundColor: color.transparent,
		borderRadius: 5,
	},
	TextStyle: {
		fontFamily: font.primary,
		fontSize: 24,
		color: color.white,
		paddingHorizontal: 10,
	},
});
