import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import CenterView from '../CenterView';
import { ButtonPrimary, ButtonTransparent } from '../../../src/components';

storiesOf('Buttons', module)
.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
.add('Button Primary', () => <ButtonPrimary onPress={action('Button Pressed')}>Primary</ButtonPrimary>)
.add('Button Primary Rounded', () => (
	<ButtonPrimary onPress={action('Button Pressed')} rounded={true}>Rounded</ButtonPrimary>)
)
.add('Button Transparent', () => (
	<ButtonTransparent onPress={action('Button Pressed')}>Transparent</ButtonTransparent>
))
