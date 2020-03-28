import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import { Alerts } from '../../../src/components';

const onCloseModal = () => {
	shown = false;
};

storiesOf('Alerts', module)
.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
.add('Error', () => (
	<Alerts {...{
		type: 'error',
		message: 'No Connection =[',
		shown: true,
		onCloseModal
	}} />
))
.add('Warning', () => (
	<Alerts {...{
		type: 'warning',
		message: 'No Selected Word',
		shown: true,
		onCloseModal
	}} />
))
.add('Success', () => (
	<Alerts {...{
		type: 'success',
		message: 'Yeep =]',
		shown: true,
		onCloseModal
	}} />
))
