import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import CenterView from '../CenterView';
import {
	ButtonPrimary,
	ButtonRounded,
	ButtonTransparent,
	FacebookButton,
	GoogleButton,
	LinkButton,
} from '../../../src/components';

storiesOf('Buttons', module)
.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
.add('Button Primary', () => <ButtonPrimary onPress={action('Button Pressed')}>Primary</ButtonPrimary>)
.add('Button Primary Loading', () => (
	<ButtonPrimary
		onPress={action('Button Pressed')}
		isLoading={true}>
			Primary
		</ButtonPrimary>))
.add('Button Primary Rounded', () => (
	<ButtonRounded onPress={action('Button Pressed')}>Rounded</ButtonRounded>)
)
.add('Button Primary Rounded Loading', () => (
	<ButtonRounded
		onPress={action('Button Pressed')}
		isLoading={true}>
			Rounded
	</ButtonRounded>)
)
.add('Button Transparent', () => (
	<ButtonTransparent onPress={action('Button Pressed')}>Transparent</ButtonTransparent>
))
.add('Button Transparent Loading', () => (
	<ButtonTransparent
		onPress={action('Button Pressed')}
		isLoading={true}>
			Transparent
	</ButtonTransparent>
))
.add('Link Button', () => (
	<LinkButton onPress={() => action('Button Pressed')}>Link Button</LinkButton>
))
.add('Facebook Button', () => (
	<>
		<Text>Default:</Text>
		<FacebookButton
			onPress={() => action('Button Pressed')}
			style={{ marginVertical: 10 }}>
			Login with Facebook
		</FacebookButton>
		<Text>Loading:</Text>
		<FacebookButton
			onPress={() => action('Button Pressed')}
			style={{ marginVertical: 10 }}
			isLoading={true}>
			Login with Facebook
		</FacebookButton>
	</>
))
.add('Google Button', () => (
	<>
		<Text>Default:</Text>
		<GoogleButton
			onPress={() => action('Button Pressed')}
			style={{ marginVertical: 10 }}>
			Login with Google
		</GoogleButton>
		<Text>Loading:</Text>
		<GoogleButton
			onPress={() => action('Button Pressed')}
			style={{ marginVertical: 10 }}
			isLoading={true}>
			Login with Google
		</GoogleButton>
	</>
))