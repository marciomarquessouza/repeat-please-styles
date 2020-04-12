import { StyleSheet, Platform } from 'react-native';
import { color } from '../../theme';

const androidPadding = Platform.OS === 'android' ? { paddingBottom: 0 } : null;

export const styles = StyleSheet.create({
	inputStyle: {
		fontSize: 18,
		borderWidth: 1,
		borderRightColor: color.transparent,
		borderLeftColor: color.transparent,
		borderTopColor: color.transparent,
		borderBottomColor: color.black,
		...androidPadding,
	},
});
