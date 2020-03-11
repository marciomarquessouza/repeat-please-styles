import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SlideText } from '../../components/SlideText';
import { ISlideProps } from './types';
import { TitleLogo } from '../../../Logo';
import { color } from '../../../../theme';

export const Slide01 = (props: ISlideProps): JSX.Element => (
	<View style={styles.slideStyle}>
		<View style={styles.logoStyle}>
			<TitleLogo />
		</View>
		<View style={styles.textStyle}>
			<SlideText {...props} />
		</View>
	</View>
);

const styles = StyleSheet.create({
	slideStyle: {
		flex: 1,
		backgroundColor: color.background,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logoStyle: {
		position: 'absolute',
		top: 60,
		paddingTop: 20,
	},
	textStyle: {
		position: 'absolute',
		bottom: 120,
	},
});
