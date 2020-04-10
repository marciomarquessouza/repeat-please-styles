import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TitleLogo } from '../../../Logo';

export const SlideLogo = () => (
	<View style={styles.container}>
		<TitleLogo />
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
