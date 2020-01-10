import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import CenterView from '../CenterView';
import {
	PlaceholderInput,
	FloatLabelInput,
} from '../../../src/components/Input';

storiesOf('Text Input', module)
	.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
	.add('Placeholder Input', () => (
		<PlaceholderInput
			keyboardType="email-address"
			placeholder="Email"
			onKeyPress={action('teste')}
		/>
	))
	.add('Placeholder Input with Icon', () => (
		<PlaceholderInput
			placeholder="Email"
			keyboardType="email-address"
			icon="mail"
		/>
	))
	.add('Password', () => (
		<PlaceholderInput
			icon="lock"
			placeholder="Password"
			secureTextEntry={true}
		/>
	))
	.add('Float Label Input', () => (
		<FloatLabelInput
			onEndEditing={action('Editing End')}
		/>
	))
	.add('Float Label Input with Icon', () => (
		<FloatLabelInput
			icon="mail"
			onEndEditing={action('Editing End')}
		/>
	));
