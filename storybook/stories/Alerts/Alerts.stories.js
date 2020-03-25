import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import { Alerts } from '../../../src/components';

let shown = true;
const onCloseModal = () => {
	shown = false;
};

storiesOf('Alerts', module)
.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
.add('Error', () => (
	<Alerts {...{
		type: 'error',
		message: 'No Connection =[',
		shown,
		onCloseModal
	}} />
))
.add('Warning', () => (
	<Alerts {...{
		type: 'warning',
		message: 'No Selected Word',
		shown,
		onCloseModal
	}} />
))
.add('Success', () => (
	<Alerts {...{
		type: 'success',
		message: 'Yeep =]',
		shown,
		onCloseModal
	}} />
))
