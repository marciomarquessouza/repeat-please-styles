import { StyleSheet } from 'react-native';
import { color } from '../../theme';

export const styles = StyleSheet.create({
	inputContainer: {
		width: '100%',
	},

	inputStyle: {
		fontSize: 22,
		borderWidth: 1,
		borderRightColor: color.transparent,
		borderLeftColor: color.transparent,
		borderTopColor: color.transparent,
		borderBottomColor: color.black,
	},
});
