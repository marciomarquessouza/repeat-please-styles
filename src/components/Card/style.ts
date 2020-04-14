import { StyleSheet } from 'react-native';
import { font, color } from '../../theme';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
	cardStyle: {
		flexDirection: 'row',
		borderRadius: 10,
		paddingVertical: 10,
	},
	leftContainer: {
		flex: 0.7,
		marginLeft: 20,
	},
	titleStyle: {
		fontFamily: font.primary,
		fontSize: 25,
		color: '#fff',
	},
	subTitleStyle: {
		fontFamily: font.primary,
		fontSize: 14,
		color: '#000',
	},
	buttonStyle: {
		flexDirection: 'row',
		borderRadius: 15,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignSelf: 'flex-start',
		marginTop: hp('1.5%'),
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	labelStyle: {
		fontFamily: font.primary,
		fontSize: 18,
		color: color.black,
		marginLeft: 5,
		marginRight: 10,
	},
	rightContainer: {
		flex: 0.3,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
