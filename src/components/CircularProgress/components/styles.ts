import { StyleSheet } from 'react-native';
import { color } from '../../../theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textProgressStyle: {
		fontWeight: 'bold',
		fontSize: 48,
		color: color.lightText,
	},
	subTextStyle: {
		fontWeight: 'bold',
		fontSize: 24,
		color: color.lightText,
	}
});
