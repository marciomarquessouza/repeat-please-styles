import { StyleSheet } from 'react-native';
import { font, color } from '../../../theme';

export const style = StyleSheet.create({
	ButtonStyle: {
		width: '100%',
		backgroundColor: color.primary,
	},
	TextContnainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	TextStyle: {
		fontFamily: font.primaryLight,
		fontSize: 22,
		color: color.white,
	},
	SpinnerStyle: {
		marginLeft: 20,
	},
});
