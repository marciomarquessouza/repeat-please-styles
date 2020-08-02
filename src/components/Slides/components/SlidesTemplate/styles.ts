import { StyleSheet } from 'react-native';
import { font } from '../../../../theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleStyle: {
		fontFamily: font.title,
		fontSize: 20,
		marginBottom: 10,
	},
});
