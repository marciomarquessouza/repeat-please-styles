import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SlideText } from '../../components/SlideText';
import { ISlideProps } from './types';
import { color } from '../../../../theme';

export const Slide03 = (props: ISlideProps): JSX.Element => (
	<View style={styles.slideStyle}>
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
	textStyle: {
		position: 'absolute',
		bottom: 120,
	},
});
