import { StyleSheet } from 'react-native';
import { font, color } from '../../../theme';

export const style = StyleSheet.create({
	ButtonStyle: {
		width: '100%',
		backgroundColor: color.primary,
	},
	TextContnainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	TextStyle: {
		fontFamily: font.primaryLight,
		fontSize: 24,
		color: color.white,
	},
	SpinnerStyle: {
		marginLeft: 20,
	},
});
