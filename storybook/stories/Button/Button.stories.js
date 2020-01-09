import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import CenterView from '../CenterView';
import { ButtonPrimary, ButtonTransparent, ButtonRounded } from '../../../src/components';

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
