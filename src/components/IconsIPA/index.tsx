import React from 'react';
import { Text, View, StyleSheet, ViewStyle } from 'react-native';
import { color } from '../../theme';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface IconsIPAProps {
	symbol: string;
	type: 'vowel' | 'consonant';
	style?: ViewStyle;
}

export const IconsIPA = ({ symbol, type, style }: IconsIPAProps) => (
	<View style={[styles.container, { backgroundColor: color[type] }, style]}>
		<Text style={styles.textStyle}>{symbol}</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		width: wp('20%'),
		height: wp('20%'),
		borderColor: color.black,
		borderWidth: 4,
		borderRadius: wp('10%'),
	},
	textStyle: {
		fontSize: 36,
		color: color.black,
		lineHeight: 60,
	},
});
