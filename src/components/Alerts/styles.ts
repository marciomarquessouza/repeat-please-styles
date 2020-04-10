import { StyleSheet } from 'react-native';
import { font } from '../../theme';

export const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		zIndex: 9,
	},
	boxStyle: {
		flex: 1,
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: '#ABABAB',
		borderRadius: 10,
		marginHorizontal: 20,
		alignItems: 'flex-start',
		paddingHorizontal: 10,
		backgroundColor: '#fff',
		paddingVertical: 10,
	},
	textStyle: {
		fontFamily: font.primary,
		fontSize: 18,
		paddingHorizontal: 20,
		paddingVertical: 5,
		flexWrap: 'wrap',
		flex: 1,
	},
	closeStyle: {
		justifyContent: 'flex-end',
		paddingVertical: 6,
	},
});
