import { StyleSheet } from 'react-native';
import { color, font } from '../../theme';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderRadius: 3,
	},
	warningStyle: {
		backgroundColor: color.warning,
	},
	textStyle: {
		fontFamily: font.primary,
		fontSize: 24,
		color: color.white,
		width: '100%',
		flex: 1,
		flexShrink: 1,
	},
	imageStyle: {
		width: 45,
		height: 45,
	},
});
