import { StyleSheet } from 'react-native';
import { color } from '../../theme';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderRadius: 3,
	},
	warningStyle: {
		backgroundColor: color.warning,
	},
	successStyle: {
		backgroundColor: color.success,
	},
	textStyle: {
		fontSize: 22,
		fontWeight: 'bold',
		color: color.white,
		width: '100%',
		flex: 1,
		flexShrink: 1,
		paddingTop: 6,
	},
	imageStyle: {
		width: 45,
		height: 45,
	},
});
