import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import { Alerts } from '../../../src/components';

const onCloseModal = () => {
	shown = false;
};

storiesOf('Alerts Message', module)
.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
.add('Alerts | Error', () => (
	<Alerts {...{
		type: 'error',
		message: 'No Connection =[',
		shown: true,
		onCloseModal
	}} />
))
.add('Alerts | Warning', () => (
	<Alerts {...{
		type: 'warning',
		message: 'No Selected Word',
		shown: true,
		onCloseModal
	}} />
))
.add('Alerts | Success', () => (
	<Alerts {...{
		type: 'success',
		message: 'Yeep =]',
		shown: true,
		onCloseModal
	}} />
))
.add('Alerts | Wrap Text', () => (
	<Alerts {...{
		type: 'success',
		message: `How many roads must a man walk down Before you call him a man? How many seas must a white dove sail Before she sleeps in the sand? Yes, 'n' how many times must the cannon balls fly Before they're forever banned? The answer, my friend, is blowin' in the wind The answer is blowin' in the wind',`,
		shown: true,
		onCloseModal
	}} />
))
