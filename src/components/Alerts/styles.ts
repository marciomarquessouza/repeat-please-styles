import { StyleSheet } from 'react-native';
import { font } from '../../theme';

export const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		zIndex: 9,
	},
	boxStyle: {
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: '#ABABAB',
		height: 60,
		borderRadius: 10,
		marginHorizontal: 20,
		alignItems: 'center',
		paddingHorizontal: 10,
		backgroundColor: '#fff',
	},
	textStyle: {
		fontFamily: font.primary,
		fontSize: 20,
		fontWeight: 'bold',
		paddingHorizontal: 20,
	},
	closeStyle: {
		position: 'absolute',
		right: 0,
		marginHorizontal: 10,
	},
});
