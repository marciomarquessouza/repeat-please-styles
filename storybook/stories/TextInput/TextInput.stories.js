import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { PlaceholderInput } from '../../../src/components/Input';

storiesOf('Text Input', module)
	.addDecorator(getStory => <KeyboardAvoidingView style={styles.container}>{getStory()}</KeyboardAvoidingView>)
	.add('Placeholder Input', () => (
		<PlaceholderInput
			keyboardType="email-address"
			placeholder="Email"
			returnKeyType="next"
		/>
	))
	.add('Password', () => (
		<PlaceholderInput
			icon="lock"
			placeholder="Password"
			secureTextEntry={true}
			returnKeyType='done'
		/>
	));

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: '100%',
		justifyContent: 'center',
	},
});
