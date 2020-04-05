import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import { PlaceholderInput } from '../../../src/components/Input';

storiesOf('Text Input', module)
	.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
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
