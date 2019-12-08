import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import CenterView from '../CenterView';
import {
	PlaceholderInput,
	PlaceholderInputIcon,
	FloatLabelInput,
	FloatLabelInputIcon,
} from '../../../src/components/Input';

storiesOf('Text Input', module)
	.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
	.add('Placeholder Input', () => <PlaceholderInput />)
	.add('Placeholder Input with Icon', () => <PlaceholderInputIcon />)
	.add('Float Label Input', () => <FloatLabelInput />)
	.add('Float Label Input with Icon', () => (
		<FloatLabelInputIcon onEndEditing={action('Editing End')} />
	));
