import { StyleSheet } from 'react-native';
import { color } from '../../../../theme';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: color.background,
	},
	skipContainer: {
		height: hp('5%'),
	},
	slideContainer: {
		flex: 1,
	},
	headerSlideContainer: {
		height: hp('25%'),
	},
	middleSlideContainer: {
		height: hp('30%'),
	},
	botomSlideContainer: {
		height: hp('22%'),
	},
	sliderContainer: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: hp('8%'),
	},
});
