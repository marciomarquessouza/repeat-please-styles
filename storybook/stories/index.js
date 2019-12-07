import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import CenterView from './CenterView';
import Welcome from './Welcome';
import {
	PlaceholderInput,
	PlaceholderInputIcon,
	FloatLabelInput,
	FloatLabelInputIcon,
} from '../../src/components';

storiesOf('Welcome', module).add('to Storybook', () => (
	<Welcome showApp={linkTo('Button')} />
));

storiesOf('TextInput', module)
	.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
	.add('Placeholder Input', () => <PlaceholderInput />)
	.add('Placeholder Input with Icon', () => <PlaceholderInputIcon />)
	.add('Float Label Input', () => <FloatLabelInput />)
	.add('Float Label Input with Icon', () => (
		<FloatLabelInputIcon onEndEditing={action('Editing End')} />
	));
