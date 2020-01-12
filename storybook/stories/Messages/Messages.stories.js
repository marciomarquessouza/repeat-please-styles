import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import { MessageWarning, MessageSuccess } from '../../../src/components/Messages';

storiesOf('Messages', module)
	.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
	.add('Warning Message', () => (
		<MessageWarning>Warning Message</MessageWarning>
	))
	.add('Success Message', () => (
		<MessageSuccess>Success Message</MessageSuccess>
	));
