import React from 'react';
import { StyleSheet, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { Card } from '../../../src/components/Card';

storiesOf('Card', module)
	.add('Default', () => (
		<View style={styles.container}>
			<Card
				title="Your daily challenge"
				subtitle="You have 15 new words to pratice"
				buttonLabel="START NOW"
				onPress={() => null}
			/>
		</View>
	))

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent:'center',
		marginHorizontal: 10,
	},
});
